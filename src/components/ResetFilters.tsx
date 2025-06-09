import useGameQuery from '@/hooks/useGameQuery';
import {Button, Icon} from '@chakra-ui/react';
import {RxReset} from 'react-icons/rx';

const ResetFilters = () => {
  const {setGameQuery} = useGameQuery();

  return (
    <Button gap={1.5} onClick={() => setGameQuery({})}>
      <span className='hide-sm'>Reset</span>
      <Icon as={RxReset} />
    </Button>
  );
};

export default ResetFilters;
