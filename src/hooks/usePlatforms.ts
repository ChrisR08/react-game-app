import platforms from '@/data/platforms';
import Platform from '@/models/platform';
import APIClient, {FetchDataResponse} from '@/services/api-client';
import {useQuery} from '@tanstack/react-query';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery<FetchDataResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: {count: platforms.length, results: platforms},
  });
export default usePlatforms;
