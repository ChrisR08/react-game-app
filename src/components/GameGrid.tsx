import {SimpleGrid, Text} from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';

import GameCard from './GameCard';
import useGames from '@/hooks/useGames';
import {range} from '@/helper/range';
import useGameQuery from '@/hooks/useGameQuery';
import {GAP} from '@/constants/styles';

const GameGrid = () => {
  const {gameQuery} = useGameQuery();
  const {data, error, isLoading} = useGames(gameQuery);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SimpleGrid
      minWidth='100%'
      alignItems={'stretch'}
      columns={{base: 1, sm: 2, lg: 3}}
      gap={GAP}
    >
      {isLoading &&
        range(9).map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {!isLoading && data?.results.length === 0 && (
        <Text>No games were found matching your search/filters.</Text>
      )}
      {data?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
