import {SimpleGrid} from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';

import GameCard from './GameCard';
import useGames from '@/hooks/useGames';
import {GameQuery} from '@/models/game-query';
import {range} from '@/utils/range';
import Platform from '@/models/platform';

interface Props {
  genreSlug: string;
  selectedPlatform: Platform | null;
}

const GameGrid = ({genreSlug, selectedPlatform}: Props) => {
  const params: Partial<GameQuery> = {
    genres: genreSlug,
    parent_platforms: selectedPlatform?.id,
  };
  const {data: games, error, isLoading} = useGames(params);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <SimpleGrid
      minWidth='100%'
      alignItems={'stretch'}
      columns={{sm: 1, md: 2, lg: 2, xl: 3}}
      gap={{base: 5, md: 6, lg: 7}}
    >
      {isLoading &&
        range(9).map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
