import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/get-cropped-image';
import {Image, List, ListItem, Spinner, Text} from '@chakra-ui/react';

const GenreList = () => {
  const {data: genres, isLoading, error} = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error}</Text>;

  return (
    <List display='flex' flexDirection='column' gap={4}>
      {genres.map((genre) => (
        <ListItem display='flex' alignItems='center' gap={2} key={genre.id}>
          <Image
            boxSize='32px'
            borderRadius={8}
            objectFit='cover'
            src={getCroppedImageUrl(genre.image_background)}
          />
          {genre.name}
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
