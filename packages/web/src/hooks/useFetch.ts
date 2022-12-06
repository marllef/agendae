import { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';
import { BareFetcher, PublicConfiguration } from 'swr/dist/types';
import { api } from '~/configs';

const fetcher = async (url: string) => {
  const response = await api.get(url);

  return response.data;
};

export default <T = unknown>(
  url: string | null,
  configs?: Partial<PublicConfiguration<T, any, BareFetcher<T>>>,
) => {
  const { data, error, isValidating } = useSWR<T>(url, fetcher, configs);

  return {
    data,
    error,
    loading: isValidating && !data,
  };
};
