import {SimpleGrid, Text} from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';

import GameCard from './GameCard';
import useGames from '@/hooks/useGames';
import {range} from '@/helper/range';
import useGameQuery from '@/hooks/useGameQuery';

const GameGrid = () => {
  const {gameQuery} = useGameQuery();
  const {data: games, error, isLoading} = useGames(gameQuery);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SimpleGrid
      minWidth='100%'
      alignItems={'stretch'}
      columns={{base: 1, sm: 2, lg: 3, '2xl': 4}}
      gap={{base: 5, md: 6, lg: 7}}
    >
      {isLoading &&
        range(9).map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {!isLoading && games.length === 0 && (
        <Text>No games were found matching your search/filters.</Text>
      )}
      {games.length > 0 &&
        games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
