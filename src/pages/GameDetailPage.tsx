import useGameDetails from '@/hooks/useGameDetails';
import {Heading, Spinner, Text} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';

const GameDetailPage = () => {
  const {slug} = useParams();

  const {data: game, isLoading, error} = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw new Error(`${error}`);

  return (
    <>
      <Heading as='h1'>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
