import {useEffect, useState} from 'react';
import apiClient from '@/services/api-client';
import {Game, GameResponse} from '@/models/game';
import {CanceledError} from 'axios';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<GameResponse>('/games', {signal: controller.signal})
      .then((res) => {
        setIsLoading(false);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return {games, error, isLoading};
};

export default useGames;
