import useGenres from '@/hooks/useGenres';
import useGameQueryStore from '@/stores/GameQueryStore';
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Spinner,
} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import {shallow} from 'zustand/shallow';

const GenreSelector = () => {
  const {gameQuery, setGenre, resetGenre} = useGameQueryStore(
    (s) => ({
      gameQuery: s.gameQuery,
      setGenre: s.setGenreId,
      resetGenre: s.resetGenre,
    }),
    shallow
  );

  const {data, error, isLoading} = useGenres();
  if (error) throw error;
  if (isLoading) return <Spinner />;

  const genres = data?.results;

  const selectedGenre = genres.find((genre) => genre.id === gameQuery.genres);
  console.log(selectedGenre);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre ? selectedGenre.name : 'Genres'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={resetGenre}>All Genres</MenuItem>
        {genres.map((genre) => (
          <MenuItem
            key={genre.id}
            onClick={() => setGenre(genre.id)}
            fontSize={14}
          >
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
