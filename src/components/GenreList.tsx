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
import getCroppedImageUrl from '../helpers/get-cropped-image';
import useGameQueryStore from '@/stores/GameQueryStore';
import {shallow} from 'zustand/shallow';

const GenreList = () => {
  const {data, isLoading, error} = useGenres();
  const {gameQuery, setGenreId} = useGameQueryStore(
    (s) => ({gameQuery: s.gameQuery, setGenreId: s.setGenreId}),
    shallow
  );

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box display='flex' flexDirection='column' gap={4}>
      <Heading fontSize='2xl'>Genres</Heading>
      <List className='wrapper' gap={3}>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <Button
              display='flex'
              alignItems='center'
              justifyContent='start'
              paddingInlineStart='0'
              whiteSpace='normal'
              textAlign='left'
              fontWeight={genre.id === gameQuery.genres ? 'bold' : 'normal'}
              gap={2.5}
              variant='ghost'
              onClick={() => setGenreId(genre.id)}
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
