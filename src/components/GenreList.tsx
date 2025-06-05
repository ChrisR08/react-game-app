import useGenres from '@/hooks/useGenres';
import {Genre} from '@/models/genre';
import getCroppedImageUrl from '@/services/get-cropped-image';
import {Button, Image, List, ListItem, Spinner, Text} from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const {data: genres, isLoading, error} = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error}</Text>;

  return (
    <List className='wrapper'>
      {genres.map((genre) => (
        <ListItem display='flex' alignItems='center' gap={3} key={genre.id}>
          <Image
            boxSize='32px'
            borderRadius={8}
            objectFit='cover'
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button variant='link' onClick={() => onSelectGenre(genre)}>
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
