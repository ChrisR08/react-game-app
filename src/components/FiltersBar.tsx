import {Button, Icon} from '@chakra-ui/react';
import {FiChevronLeft} from 'react-icons/fi';
import PlatformSelector from './PlatformSelector';
import ResetFilters from './ResetFilters';
import useGameQuery from '@/hooks/useGameQuery';
import SortSelector from './SortSelector';

const FiltersBar = () => {
  const {gameQuery, setGameQuery} = useGameQuery();
  const {genre} = gameQuery;

  const handleResetGenre = () => {
    setGameQuery((prev) => {
      const {genre, ...rest} = prev;
      return rest;
    });
  };

  return (
    <div id='filters' className='wrapper wrapper-x'>
      {genre?.name && (
        <Button variant='solid' gap={0.5} onClick={handleResetGenre}>
          <Icon as={FiChevronLeft} />
          All Genres
        </Button>
      )}
      <PlatformSelector />
      <SortSelector />
      {Object.keys(gameQuery).length > 1 && <ResetFilters />}
    </div>
  );
};

export default FiltersBar;
