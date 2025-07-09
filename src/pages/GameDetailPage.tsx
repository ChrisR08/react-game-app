import ReadMore from '@/components/ReadMore';
import useGameDetails from '@/hooks/useGameDetails';
import {Heading, Spinner} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';
import GameAttributes from '@/components/GameAttributes';
import GameTrailer from '@/components/GameTrailer';
import GameScreenshots from '@/components/GameScreenshots';

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error} = useGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw new Error(`${error}`);

  return (
    <>
      <Heading as='h1'>{game.name}</Heading>
      <ReadMore excerptLength={350}>{game.description_raw}</ReadMore>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
