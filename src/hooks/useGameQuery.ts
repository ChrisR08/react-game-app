import {useContext} from 'react';
import {GameQueryContext} from '@/context/game-query-context';

const useGameQuery = () => {
  const context = useContext(GameQueryContext);
  if (!context)
    throw new Error('useGameQuery must be used within GameQueryProvider');
  return context;
};

export default useGameQuery;
