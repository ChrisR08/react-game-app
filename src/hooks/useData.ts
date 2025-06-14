import useSWR from 'swr';
import {AxiosError} from 'axios';
import apiClient from '../services/api-client';
import {cleanParams} from '../helper/clean-params';

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const fetcher = <T>(endpoint: string, params?: Record<string, any>) =>
  apiClient
    .get<FetchDataResponse<T>>(endpoint, {
      params: cleanParams(params ?? {}),
    })
    .then((res) => res.data.results);

const useData = <T>(endpoint: string, params?: Record<string, any>) => {
  const key = params ? [endpoint, cleanParams(params)] : endpoint;

  const {data, error, isLoading} = useSWR<T[]>(key, () =>
    fetcher<T>(endpoint, params)
  );
  return {
    data: data ?? [],
    error: error instanceof AxiosError ? error.message : '',
    isLoading,
  };
};

export default useData;
