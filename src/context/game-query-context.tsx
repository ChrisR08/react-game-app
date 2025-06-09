import {GameContext} from '@/models/game-context';
import {createContext, useState} from 'react';

type GameQueryContextType = {
  gameQuery: GameContext;
  setGameQuery: React.Dispatch<React.SetStateAction<GameContext>>;
};

export const GameQueryContext = createContext<GameQueryContextType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const GameQueryProvider = ({children}: Props) => {
  const [gameQuery, setGameQuery] = useState<GameContext>({});

  return (
    <GameQueryContext.Provider value={{gameQuery, setGameQuery}}>
      {children}
    </GameQueryContext.Provider>
  );
};
