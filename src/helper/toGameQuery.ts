import {GameQuery} from '@/models/game-query';
import {GameContext} from '@/models/game-context';

const toGameQuery = (context: GameContext): GameQuery => ({
  search: context.search,
  genres: context.genre?.slug,
  parent_platforms: context.platform?.id,
  ordering: context.ordering,
  tags: context.tags,
  dates: context.dates,
  metacritic: context.metacritic,
});

export default toGameQuery;
