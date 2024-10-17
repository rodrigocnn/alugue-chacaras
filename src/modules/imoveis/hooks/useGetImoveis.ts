import { useQuery } from '@tanstack/react-query';

import api from '@/services/api';
import { Imovel } from '../interfaces';

export function useGetImoveis() {
  const getImoveis = async (): Promise<Imovel[]> => {
    try {
      const response = await api.index('properties');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch properties', error);
      return [];
    }
  };

  const queryImoveis = useQuery({
    queryKey: ['get-imoveis'],
    queryFn: getImoveis,
  });

  return {
    queryImoveis,
  };
}
