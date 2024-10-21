import { useQuery } from '@tanstack/react-query';

import api from '@/services/api';
import { User } from '../interfaces';

export function useGetProprietarios() {
  const getImoveis = async (): Promise<User[]> => {
    try {
      const response = await api.index('users/owners');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch properties', error);
      return [];
    }
  };

  const queryProprietarios = useQuery({
    queryKey: ['get-proprietarios'],
    queryFn: getImoveis,
  });

  return {
    queryProprietarios,
  };
}
