import {Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react';
import {Game} from '../models/game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../utils/get-cropped-image';
import GameCardContainer from './GameCardContainer';
interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <GameCardContainer>
      <Card height='100%'>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          minHeight={{base: '210px', md: '230px', lg: '250px'}}
          objectFit='cover'
        />
        <CardBody display='grid' gap={4}>
          <Heading fontSize='xl'>{game.name}</Heading>
          <HStack justifyContent='space-between'>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
