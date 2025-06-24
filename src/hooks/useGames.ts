import {useInfiniteQuery} from '@tanstack/react-query';

import {cleanParams} from '../helpers/clean-params';
import APIClient, {FetchDataResponse} from '@/services/api-client';
import {GameQuery} from '@/stores/GameQueryStore';
import {Platform} from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  rating: number;
  ratings_count: number;
  genres: {id: number; name: string}[];
  parent_platforms: {platform: Platform}[] | null;
  metacritic: number;
  playtime: number;
  description_raw: string;
}

export interface GameResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

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
