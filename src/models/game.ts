import Platform from './platform';

export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  rating: number;
  ratings_count: number;
  genres: {id: number; name: string}[];
  parent_platforms: {platform: Platform}[];
  metacritic: number;
  playtime: number;
  description_raw: string;
}

export interface GameResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}
