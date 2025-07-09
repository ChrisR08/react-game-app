import {useQuery} from '@tanstack/react-query';
import APIClient, {FetchDataResponse} from '@/services/api-client';
import {Screenshot} from '@/models/Screenshot';

const useScreenshots = (id: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery<FetchDataResponse<Screenshot>, Error>({
    queryKey: ['screenshots', id],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useScreenshots;
