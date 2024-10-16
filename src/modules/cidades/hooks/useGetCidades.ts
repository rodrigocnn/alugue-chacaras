import { useQuery } from '@tanstack/react-query';

import api from '@/services/api';
import { Cidade } from '../interfaces';

export function useGetCidades() {
  const getCidades = async (): Promise<Cidade[]> => {
    try {
      const response = await api.index('cities');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch companies:', error);
      return [];
    }
  };

  const queryCidades = useQuery({
    queryKey: ['get-cidades'],
    queryFn: getCidades,
  });

  return {
    queryCidades,
  };
}
