import {Button, Icon, Heading} from '@chakra-ui/react';
import {FiChevronLeft} from 'react-icons/fi';

import GameGrid from './GameGrid';
import PlatformSelector from './PlatformSelector';
import {Genre} from '@/models/genre';

interface Props {
  selectedGenre: Genre;
  resetGenre: () => void;
}
const Main = ({selectedGenre, resetGenre}: Props) => {
  return (
    <main className='wrapper'>
      <Heading fontSize='5xl'>
        {selectedGenre.name ? selectedGenre.name : 'Games'}
      </Heading>
      <div className='wrapper wrapper-x'>
        {selectedGenre.name && (
          <Button variant='solid' gap={0.5} onClick={resetGenre}>
            <Icon as={FiChevronLeft} />
            All Genres
          </Button>
        )}
        <PlatformSelector />
      </div>
      <GameGrid genreSlug={selectedGenre.slug} />
    </main>
  );
};

export default Main;
