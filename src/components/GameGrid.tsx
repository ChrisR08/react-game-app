import useGames from '@/hooks/useGames';
import GameCard from './GameCard';
import {SimpleGrid, Skeleton} from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const {games, error, isLoading} = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <SimpleGrid
      minWidth='100%'
      columns={{sm: 1, md: 2, lg: 2, xl: 3}}
      spacing={6}
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
