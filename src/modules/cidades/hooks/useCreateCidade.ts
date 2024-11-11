import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

import api from '../../../services/api';
import { citySchema } from '../validations';

interface IFormCity {
  name: string;
  slug: string;
}

export function useCreateCidade() {
  const [validations, setValidations] = useState<string[]>([]);
  const [form, setForm] = useState<IFormCity>({ name: '', slug: '' });
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {}, []);

  const validation = async (company: any) => {
    try {
      await citySchema.validate(company);
      return true;
    } catch (error: any) {
      toast(error.errors[0], { type: 'error' });
      setValidations(error.errors);
      return false;
    }
  };

  const adicionarCidade = async (cidade: IFormCity) => {
    const response = await api.store('cities', cidade);
    return response.data;
  };

  const mutation = useMutation<AxiosResponse, AxiosError, IFormCity>({
    mutationFn: adicionarCidade,
    onSuccess: (data) => {
      if (data) {
        toast('Registro Atualizado com Sucesso', { type: 'success' });
        queryClient.refetchQueries({ queryKey: ['get-cities'] });
        router.push('/admin/cidades');
      }
    },
    onError: () => {
      toast('Não foi possivel realizar operação', { type: 'error' });
    },
  });

  const gerarSlug = (value: string) => {
    const str = value
      .toLowerCase()
      .normalize('NFD') // Decompõe caracteres acentuados
      .replace(/[\u0300-\u036f]/g, '') // Remove marcas de acentuação
      .trim()
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-'); // Substitui espaços por hífens
    return str;
  };

  const manipularInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    const slug = gerarSlug(name);

    setForm({ ...form, slug: slug, name: name });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (await validation(form)) {
      mutation.mutate(form);
    }
  };
  return {
    validations,
    form,
    manipularInput,
    onSubmit,
  };
}
