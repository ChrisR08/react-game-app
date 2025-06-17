import {useQuery} from '@tanstack/react-query';

import APIClient, {FetchDataResponse} from '@/services/api-client';
import {Genre} from '@/models/genre';
import genres from '@/data/genres';

const apiCLient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiCLient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: {count: genres.length, results: genres},
  });

export default useGenres;
