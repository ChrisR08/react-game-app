import Game from '@/models/Game';
import {SimpleGrid, ListItem} from '@chakra-ui/react';
import CriticScore from './CriticScore';
import UnorderedList from './UnorderedList';

interface Props {
  game: Game;
}
const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} gap={4}>
      <UnorderedList heading='Platforms'>
        {game.parent_platforms?.map(({platform}) => (
          <ListItem key={platform.id}>{platform.name}</ListItem>
        ))}
      </UnorderedList>

      {game.metacritic && (
        <UnorderedList heading='MetaScore'>
          <CriticScore score={game.metacritic} />
        </UnorderedList>
      )}

      <UnorderedList heading='Genres'>
        {game.genres.map((genre) => (
          <ListItem key={genre.id}>{genre.name}</ListItem>
        ))}
      </UnorderedList>

      {game.publishers && (
        <UnorderedList heading='Publishers'>
          {game.publishers.map((publisher) => (
            <ListItem key={publisher.id}>{publisher.name}</ListItem>
          ))}
        </UnorderedList>
      )}
    </SimpleGrid>
  );
};

export default GameAttributes;
