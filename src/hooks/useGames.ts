import {useQuery} from '@tanstack/react-query';

import {Game} from '../models/game';
import {cleanParams} from '../helpers/clean-params';
import {GameContext} from '@/models/game-context';
import toGameQuery from '@/helpers/toGameQuery';
import APIClient, {FetchDataResponse} from '@/services/api-client';

const apiCLient = new APIClient<Game>('/games');

const useGames = (query?: Partial<GameContext>) => {
  const gameQuery = query ? toGameQuery(query) : undefined;
  const cleaned = gameQuery ? cleanParams(gameQuery) : undefined;

  return useQuery<FetchDataResponse<Game>, Error>({
    queryKey: ['games', cleaned],
    queryFn: () => apiCLient.getAll({params: cleaned}),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
  });
};

export default useGames;
