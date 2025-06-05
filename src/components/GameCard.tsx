import {Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react';
import {Game} from '@/models/game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/get-cropped-image';
interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card overflow='hidden' borderRadius={8}>
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
  );
};

export default GameCard;
