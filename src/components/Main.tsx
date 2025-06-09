import {Heading} from '@chakra-ui/react';
import GameGrid from './GameGrid';
import useGameQuery from '@/hooks/useGameQuery';
import FiltersBar from './FiltersBar';

const Main = () => {
  const {gameQuery} = useGameQuery();
  const {genre} = gameQuery;

  return (
    <main className='wrapper'>
      <Heading fontSize='5xl'>{genre?.name ? genre.name : 'Games'}</Heading>
      <FiltersBar />
      <GameGrid />
    </main>
  );
};

export default Main;
