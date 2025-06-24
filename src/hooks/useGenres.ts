import {useQuery} from '@tanstack/react-query';

import APIClient, {FetchDataResponse} from '@/services/api-client';
import genres from '@/data/genres';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface GenreResponse {
  count: number;
  results: Genre[];
}

const apiCLient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiCLient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: {count: genres.length, results: genres},
  });

export default useGenres;
