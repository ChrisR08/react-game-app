import {PRIMARY_COLOR} from '@/styles/constants';
import {Box} from '@chakra-ui/react';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({children}: Props) => {
  return (
    <Box
      className='game-card-container'
      width='100%'
      height='100%'
      overflow='hidden'
      borderRadius={8}
      border='1px solid'
      borderColor={PRIMARY_COLOR}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
