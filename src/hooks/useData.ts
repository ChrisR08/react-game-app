import {useEffect, useState} from 'react';
import {CanceledError} from 'axios';
import apiClient from '../services/api-client';
import FetchDataResponse from '../models/data';

const useData = <T>(endpoint: string, genre?: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchDataResponse<T>>(endpoint, {
        signal: controller.signal,
        params: genre
          ? {
              genres: genre.toLowerCase(),
            }
          : {},
      })
      .then((res) => {
        setIsLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [genre]);

  return {data, error, isLoading};
};

export default useData;
