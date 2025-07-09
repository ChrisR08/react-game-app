import useTrailers from '@/hooks/useTrailers';
import {Spinner} from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
  const {data: trailers, error} = useTrailers(gameId);
  if (error) throw error;

  const firstTrailer = trailers?.results[0];
  if (!firstTrailer) return null;

  return (
    <video poster={firstTrailer.preview} controls>
      <source src={firstTrailer.data['480']} type='video/mp4' />
      <source src={firstTrailer.data['max']} type='video/mp4' />
    </video>
  );
};

export default GameTrailer;
