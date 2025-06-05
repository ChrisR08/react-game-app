import {Badge} from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({score}: Props) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge
      colorScheme={color}
      maxWidth='fit-content'
      fontSize={16}
      paddingInline={2}
      borderRadius={4}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
