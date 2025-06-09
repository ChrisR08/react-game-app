import {
  Box,
  Button,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../helper/get-cropped-image';
import useGameQuery from '@/hooks/useGameQuery';
import {Genre} from '@/models/genre';

const GenreList = () => {
  const {data: genres, isLoading, error} = useGenres();
  const {
    gameQuery: {genre: selectedGenre},
    setGameQuery,
  } = useGameQuery();

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error}</Text>;

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery((prev) => ({...prev, genre}));
  };

  return (
    <Box display='flex' flexDirection='column' gap={4}>
      <Heading fontSize='2xl'>Genres</Heading>
      <List className='wrapper' gap={3}>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <Button
              display='flex'
              alignItems='center'
              justifyContent='start'
              paddingInlineStart='0'
              whiteSpace='normal'
              textAlign='left'
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              gap={2.5}
              variant='ghost'
              onClick={() => handleSelectGenre(genre)}
            >
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
