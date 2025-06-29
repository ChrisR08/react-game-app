import {Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../helpers/get-cropped-image';
import GameCardContainer from './GameCardContainer';
import {Game} from '@/hooks/useGames';

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  const imageSrc = game.background_image
    ? getCroppedImageUrl(game.background_image)
    : '/no-image-placeholder-6f3882e0.webp';

  return (
    <GameCardContainer>
      <Card height='100%'>
        <Image
          src={imageSrc}
          alt={game.name}
          minHeight={{base: '210px', md: '230px', lg: '250px'}}
          objectFit='cover'
        />
        <CardBody display='grid' gap={4}>
          <HStack justifyContent='space-between'>
            {Array.isArray(game.parent_platforms) && (
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
            )}
            {typeof game.metacritic === 'number' && (
              <CriticScore score={game.metacritic} />
            )}
          </HStack>
          <Heading fontSize='xl'>{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
