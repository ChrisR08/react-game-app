import {Game} from '../models/game';
import useData from './useData';
import {cleanParams} from '../helper/clean-params';
import {GameContext} from '@/models/game-context';
import toGameQuery from '@/helper/toGameQuery';

const useGames = (query?: Partial<GameContext>) => {
  const gameQuery = query ? toGameQuery(query) : undefined;
  const cleaned = gameQuery ? cleanParams(gameQuery) : undefined;

  return useData<Game>('/games', cleaned);
};

export default useGames;
