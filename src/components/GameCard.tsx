import {Card, CardBody, Heading, Image} from '@chakra-ui/react';
import {Game} from '@/models/game';

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card overflow='hidden' borderRadius={8}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize='xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
