import {SimpleGrid} from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';

import GameCard from './GameCard';
import useGames from '@/hooks/useGames';

const GameGrid = () => {
  const {data: games, error, isLoading} = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <SimpleGrid
      minWidth='100%'
      columns={{sm: 1, md: 2, lg: 2, xl: 3}}
      gap={{base: 4, md: 5, lg: 6}}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
