import apiClient from '@/services/api-client';
import {useQuery} from '@tanstack/react-query';
import {FetchDataResponse} from './useData';
import {Genre} from '@/models/genre';
import genres from '@/data/genres';

const useGenres = () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Genre>>('/genres')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: {count: genres.length, results: genres},
  });

export default useGenres;
