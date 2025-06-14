import platforms from '@/data/platforms';
import Platform from '@/models/platform';
import apiClient from '@/services/api-client';
import {useQuery} from '@tanstack/react-query';
import {FetchDataResponse} from './useData';

const usePlatforms = () =>
  useQuery<FetchDataResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: {count: platforms.length, results: platforms},
  });
export default usePlatforms;
