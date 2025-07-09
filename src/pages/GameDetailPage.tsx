import ReadMore from '@/components/ReadMore';
import useGameDetails from '@/hooks/useGameDetails';
import {Box, Heading, SimpleGrid, Spinner} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';
import GameAttributes from '@/components/GameAttributes';
import GameTrailer from '@/components/GameTrailer';
import GameScreenshots from '@/components/GameScreenshots';
import {GAP} from '@/styles/constants';

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error} = useGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw new Error(`${error}`);

  return (
    <SimpleGrid minWidth='100%' columns={{base: 1, lg: 2}} gap={GAP}>
      <Box display='flex' flexDirection='column' gap={GAP}>
        <Heading as='h1' fontSize={{base: '3xl', md: '4xl', lg: '5xl'}}>
          {game.name}
        </Heading>
        <ReadMore excerptLength={350}>{game.description_raw}</ReadMore>
        <GameAttributes game={game} />
      </Box>
      <Box display='flex' flexDirection='column' gap={GAP}>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
