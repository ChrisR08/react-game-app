import useGenres from '../hooks/useGenres';
import {Genre} from '../models/genre';
import getCroppedImageUrl from '../utils/get-cropped-image';
import {Button, Image, List, ListItem, Spinner, Text} from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const {data: genres, isLoading, error} = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error}</Text>;

  return (
    <List className='wrapper'>
      {genres.map((genre) => (
        <ListItem
          display='flex'
          alignItems='center'
          justifyContent='start'
          gap={1.5}
          key={genre.id}
        >
          <Image
            boxSize='32px'
            borderRadius={8}
            objectFit='cover'
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button
            fontWeight={genre.id === selectedGenre.id ? 'bold' : 'normal'}
            variant='ghost'
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
