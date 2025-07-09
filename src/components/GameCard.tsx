import {Box, Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../helpers/get-cropped-image';
import GameCardContainer from './GameCardContainer';
import Game from '@/models/Game';
import {Link} from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  const imageSrc = game.background_image
    ? getCroppedImageUrl(game.background_image)
    : '/no-image-placeholder-6f3882e0.webp';

  const url = `/games/${game.slug}`;

  return (
    <GameCardContainer>
      <Card className='game-card' height='100%'>
        <Box
          className='img-wrapper'
          overflow='hidden'
          maxHeight={{base: '210px', md: '230px', lg: '250px'}}
        >
          <Image
            className='game-card__img'
            src={imageSrc}
            alt={game.name}
            minHeight={{base: '210px', md: '230px', lg: '250px'}}
            objectFit='cover'
          />
        </Box>

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
          <Link className='game-card__h2' to={url}>
            <Heading className='game-card__h2' fontSize='xl'>
              {game.name}
            </Heading>
          </Link>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
