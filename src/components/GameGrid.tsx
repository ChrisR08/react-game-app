import {SimpleGrid} from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';

import GameCard from './GameCard';
import useGames from '@/hooks/useGames';
import {range} from '@/helper/range';
import useGameQuery from '@/hooks/useGameQuery';

const GameGrid = () => {
  const {gameQuery} = useGameQuery();
  const {data: games, error, isLoading} = useGames(gameQuery);

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
