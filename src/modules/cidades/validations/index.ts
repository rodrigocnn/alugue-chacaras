import { object, string } from 'yup';

export const citySchema = object().shape({
  name: string().required('Nome da Cidade deve ser preenchido'),
  slug: string().required('Slug da Cidade deve ser preenchido'),
});
