import useScreenshots from '@/hooks/useScreenshots';
import {GAP} from '@/styles/constants';
import {Image, SimpleGrid, Spinner} from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
  const {data, error, isLoading} = useScreenshots(gameId);
  if (error) throw error;
  if (isLoading) return <Spinner />;

  const screenshots = data?.results;
  if (!screenshots) return null;

  return (
    <SimpleGrid minWidth='100%' columns={{base: 1, md: 2}} gap={4}>
      {screenshots.map((screenshot, index) => (
        <Image key={index} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
