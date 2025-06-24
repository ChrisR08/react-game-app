import {Button, Icon} from '@chakra-ui/react';
import {FiChevronLeft} from 'react-icons/fi';
import {shallow} from 'zustand/shallow';
import PlatformSelector from './PlatformSelector';
import ResetFilters from './ResetFilters';
import SortSelector from './SortSelector';
import useGameQueryStore from '@/stores/GameQueryStore';

const FiltersBar = () => {
  const {gameQuery, resetGenre} = useGameQueryStore(
    (s) => ({
      gameQuery: s.gameQuery,
      resetGenre: s.resetGenre,
    }),
    shallow
  );

  return (
    <div className='filters wrapper wrapper-x'>
      {gameQuery.genres && (
        <Button variant='solid' gap={0.5} onClick={() => resetGenre()}>
          <Icon as={FiChevronLeft} />
          All Genres
        </Button>
      )}
      <PlatformSelector />
      <SortSelector />
      {gameQuery && Object.keys(gameQuery).length > 1 && <ResetFilters />}
    </div>
  );
};

export default FiltersBar;
