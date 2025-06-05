import {Game} from '@/models/game';
import useData from './useData';

const useGames = (genre?: string) => useData<Game>('/games', genre);

export default useGames;
