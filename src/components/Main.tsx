import {Button, Icon, Heading} from '@chakra-ui/react';
import {FiChevronLeft} from 'react-icons/fi';

import GameGrid from './GameGrid';
import PlatformSelector from './PlatformSelector';
import {Genre} from '@/models/genre';
import {useState} from 'react';
import Platform from '@/models/platform';

interface Props {
  selectedGenre: Genre;
  resetGenre: () => void;
}
const Main = ({selectedGenre, resetGenre}: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handlePlatformClick = (platform: Platform) => {
    setSelectedPlatform(platform);
  };

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
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          handlePlatformClick={handlePlatformClick}
        />
      </div>
      <GameGrid
        genreSlug={selectedGenre.slug}
        selectedPlatform={selectedPlatform}
      />
    </main>
  );
};

export default Main;
