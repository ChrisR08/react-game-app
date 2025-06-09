import {Genre} from './genre';
import Platform from './platform';

interface GameContextBase {
  page: number;
  page_size: number;
  search: string;
  genre: Genre;
  tags: string;
  dates: string;
  platform: Platform;
  metacritic: string;
  ordering: string;
}

export type GameContext = Partial<GameContextBase>;
