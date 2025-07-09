import Platform from '@/models/Platform';
import Publisher from './Publisher';

export default interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  rating: number;
  ratings_count: number;
  genres: {id: number; name: string}[];
  parent_platforms: {platform: Platform}[] | null;
  metacritic: number;
  playtime: number;
  description_raw: string;
  publishers: Publisher[];
}
