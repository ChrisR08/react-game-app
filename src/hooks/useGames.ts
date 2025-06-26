import {useInfiniteQuery} from '@tanstack/react-query';

import {cleanParams} from '../helpers/clean-params';
import APIClient, {FetchDataResponse} from '@/services/api-client';
import {GameQuery} from '@/stores/GameQueryStore';
import {Game} from '../models/Game';

const apiCLient = new APIClient<Game>('/games');

const useGames = (query?: Partial<GameQuery>) => {
  const cleaned = query ? cleanParams(query) : undefined;

  return useInfiniteQuery<FetchDataResponse<Game>, Error>({
    queryKey: ['games', cleaned],
    queryFn: ({pageParam = 1}) => {
      cleaned ? (cleaned.page = pageParam) : null;
      return apiCLient.getAll({params: cleaned});
    },
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
