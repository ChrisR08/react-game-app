import {Heading} from '@chakra-ui/react';
import GameGrid from './GameGrid';
import FiltersBar from './FiltersBar';
import BackToTop from './BackToTop';
import useGameQueryStore from '@/stores/GameQueryStore';
import genres from '@/data/genres';
import getPlatformName from '@/helpers/get-platform-name';

const Main = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  // Determine Genre name from the query id
  const currentGenre = genres.filter((genre) => genre.id === gameQuery.genres);

  // Creates dynamic heading stating the queried plartform and genre if truthy
  let heading = `${getPlatformName(gameQuery) || ''} ${
    currentGenre[0]?.name || ''
  } Games`;

  return (
    <main className='wrapper'>
      <Heading as='h1' fontSize='5xl'>
        {heading}
      </Heading>
      <FiltersBar />
      <GameGrid />
      <BackToTop />
    </main>
  );
};

export default Main;
