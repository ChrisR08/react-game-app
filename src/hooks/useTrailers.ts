import {useQuery} from '@tanstack/react-query';
import APIClient, {FetchDataResponse} from '@/services/api-client';
import Trailer from '@/models/Trailer';

const useTrailers = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);

  return useQuery<FetchDataResponse<Trailer>, Error>({
    queryKey: ['trailers', id],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useTrailers;
