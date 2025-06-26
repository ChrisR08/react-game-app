import ReadMore from '@/components/ReadMore';
import useGameDetails from '@/hooks/useGameDetails';
import {Heading, Spinner, Text} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';
import GameAttributes from '@/components/GameAttributes';

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error} = useGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw new Error(`${error}`);

  return (
    <>
      <Heading as='h1'>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
      <ReadMore excerptLength={250}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum
        dolorem possimus ut voluptates repudiandae voluptate doloribus
        accusantium, quam minus nobis suscipit maiores nesciunt laudantium
        temporibus debitis sit deserunt commodi. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Nisi dolorum dolorem possimus ut
        voluptates repudiandae voluptate doloribus accusantium, quam minus nobis
        suscipit maiores nesciunt laudantium temporibus debitis sit deserunt
        commodi.
      </ReadMore>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
