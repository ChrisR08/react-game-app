import useGames from '@/hooks/useGames';
import GameCard from './GameCard';
import {SimpleGrid} from '@chakra-ui/react';

const GameGrid = () => {
  const {games, error} = useGames();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 2, xl: 3}} spacing={8}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
