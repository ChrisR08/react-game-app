import {Game} from '../models/game';
import {cleanParams} from '../helper/clean-params';
import {GameContext} from '@/models/game-context';
import toGameQuery from '@/helper/toGameQuery';
import {useQuery} from '@tanstack/react-query';
import apiClient from '@/services/api-client';
import {FetchDataResponse} from './useData';

const useGames = (query?: Partial<GameContext>) => {
  const gameQuery = query ? toGameQuery(query) : undefined;
  const cleaned = gameQuery ? cleanParams(gameQuery) : undefined;

  return useQuery<FetchDataResponse<Game>, Error>({
    queryKey: ['games', cleaned],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Game>>('/games', {
          params: cleaned,
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
  });
};

export default useGames;
