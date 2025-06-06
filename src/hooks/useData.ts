import useSWR from 'swr';
import {AxiosError} from 'axios';
import apiClient from '../services/api-client';
import FetchDataResponse from '../models/data';
import {cleanParams} from '../utils/clean-params';
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
