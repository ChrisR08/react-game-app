import {Heading} from '@chakra-ui/react';
import GameGrid from './GameGrid';
import useGameQuery from '@/hooks/useGameQuery';
import FiltersBar from './FiltersBar';

const Main = () => {
  const {gameQuery} = useGameQuery();

  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <main className='wrapper'>
      <Heading as='h1' fontSize='5xl'>
        {heading}
      </Heading>
      <FiltersBar />
      <GameGrid />
    </main>
  );
};

export default Main;
