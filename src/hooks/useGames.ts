import {GameQuery} from '@/models/game-query';
import {Game} from '../models/game';
import useData from './useData';
import {cleanParams} from '../utils/clean-params';

const useGames = (query?: Partial<GameQuery>) => {
  const cleaned = query ? cleanParams(query) : undefined;
  return useData<Game>('/games', cleaned);
};

export default useGames;
