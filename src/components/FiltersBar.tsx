import {Box, Button, Icon} from '@chakra-ui/react';
import {FiChevronLeft} from 'react-icons/fi';
import {shallow} from 'zustand/shallow';
import PlatformSelector from './PlatformSelector';
import ResetFilters from './ResetFilters';
import SortSelector from './SortSelector';
import useGameQueryStore from '@/stores/GameQueryStore';
import GenreList from './GenreList';
import GenreSelector from './GenreSelector';

const FiltersBar = () => {
  const {gameQuery} = useGameQueryStore((s) => ({
    gameQuery: s.gameQuery,
  }));

  return (
    <Box className='filters wrapper wrapper-x'>
      <GenreSelector />
      <PlatformSelector />
      <SortSelector />
      {gameQuery && Object.keys(gameQuery).length > 1 && <ResetFilters />}
    </Box>
  );
};

export default FiltersBar;
