import { object, string } from 'yup';

export const imovelSchema = object().shape({
  description: string().required('Descrição da empresa é obrigatório '),
});
