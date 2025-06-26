import {useQuery} from '@tanstack/react-query';

import APIClient from '@/services/api-client';
import {Game} from '../models/Game';

const apiClient = new APIClient<Game>('/games');

const useGameDetails = (gameSlug: string) =>
  useQuery<Game, Error>({
    queryKey: ['gameDetails', gameSlug],
    queryFn: () => apiClient.get(gameSlug),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    enabled: !!gameSlug,
  });
export default useGameDetails;
