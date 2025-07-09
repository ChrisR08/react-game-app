import useGameQueryStore from '@/stores/GameQueryStore';
import {Button, Icon} from '@chakra-ui/react';
import {RxReset} from 'react-icons/rx';

const ResetFilters = () => {
  const resetQuery = useGameQueryStore((s) => s.resetQuery);

  return (
    <Button gap={1.5} aria-label='Reset filters' onClick={resetQuery}>
      Reset
      <Icon as={RxReset} />
    </Button>
  );
};

export default ResetFilters;
