import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';

import { imovelSchema } from '../validations';
import { InputImovel, User } from '../interfaces';
import { useGetCidades } from '@/modules/cidades/hooks/useGetCidades';
import { useGetProprietarios } from '@/modules/proprietarios/hooks/useGetProprietarios';
import api from '../../../services/api';

interface IMultiSelectList {
  value: string;
  label: string;
}

interface IFileImagemDestaque {
  errors: undefined;
  file: File;
  name: string;
  size: number;
  type: string;
  valid: boolean;
}

export function useCreateImovel() {
  const [validations, setValidations] = useState<string[]>([]);
  const [selectCidades, setSelectCidades] = useState<IMultiSelectList[]>([]);
  const [selectProprietarios, setSelectProprietarios] = useState<
    IMultiSelectList[]
  >([]);
  const [valorACombinar, setValorACombinar] = useState<boolean>(false);
  const [imagemDestaque, setImagemDestaque] = useState<IFileImagemDestaque[]>(
    []
  );
  const { queryCidades } = useGetCidades();
  const { queryProprietarios } = useGetProprietarios();
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    const gerarSelectCidades = () => {
      if (queryCidades.data) {
        const result = queryCidades.data.map((cidade) => {
          return { value: cidade.id as string, label: cidade.name };
        });
        setSelectCidades(result);
      }
    };

    gerarSelectCidades();
  }, [queryCidades.data]);

  useEffect(() => {
    const gerarSelectProprietarios = () => {
      if (queryProprietarios.data) {
        const result = queryProprietarios.data.map((proprietario: User) => {
          return { value: proprietario.id as string, label: proprietario.name };
        });
        setSelectProprietarios(result);
      }
    };

    gerarSelectProprietarios();
  }, [queryProprietarios.data]);

  const updateImagemDestaque = (incommingFiles: any) => {
    setImagemDestaque(incommingFiles);
  };

  const manipularCheckbox = (value: boolean) => {
    setValorACombinar(value);
  };

  const validation = async (company: any) => {
    try {
      await imovelSchema.validate(company);
      return true;
    } catch (error: any) {
      toast(error.errors[0], { type: 'error' });
      setValidations(error.errors);
      return false;
    }
  };

  const adicionarImovel = async (imovel: FormData) => {
    const response = await api.store('properties', imovel);
    return response.data;
  };

  const mutation = useMutation<AxiosResponse, AxiosError, FormData>({
    mutationFn: adicionarImovel,
    onSuccess: (data) => {
      if (data) {
        toast('Registro Atualizado com Sucesso', { type: 'success' });
        queryClient.refetchQueries({ queryKey: ['get-companies'] });
        router.push('/admin/imoveis');
      }
    },
    onError: () => {
      toast('Não foi possivel realizar operação', { type: 'error' });
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const imovel = data as InputImovel;

    if (await validation(imovel)) {
      const formData = new FormData();
      formData.append('imagemDestaque', imagemDestaque[0].file);
      formData.append('name', imovel.name);
      formData.append('description', imovel.description);
      formData.append('location', imovel.location);
      formData.append('cityId', imovel.cityId);
      formData.append('googleMapsUrl', imovel.cityId);
      formData.append('value', imovel.value);
      formData.append('toBeAgreed', String(valorACombinar));
      mutation.mutate(formData);
    }
  };
  return {
    validations,
    valorACombinar,
    selectProprietarios,
    selectCidades,
    setSelectCidades,
    imagemDestaque,
    setImagemDestaque,
    updateImagemDestaque,
    manipularCheckbox,
    onSubmit,
  };
}
