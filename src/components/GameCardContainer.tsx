import {Box} from '@chakra-ui/react';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({children}: Props) => {
  return (
    <Box width='100%' minWidth='250px' overflow='hidden' borderRadius={8}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
