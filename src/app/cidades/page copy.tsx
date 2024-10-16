import { DataGrid } from '@/components/personal/datagrid';
import Layout from '@/components/personal/layout';
import { Cidade } from '@/modules/cidades/interfaces';

const cities = [
  {
    name: 'São Paulo',
    slug: 'sao-paulo',
  },
  {
    name: 'Rio de Janeiro',
    slug: 'rio-de-janeiro',
  },
  {
    name: 'Belo Horizonte',
    slug: 'belo-horizonte',
  },
  {
    name: 'Porto Alegre',
    slug: 'porto-alegre',
  },
  {
    name: 'Curitiba',
    slug: 'curitiba',
  },
  {
    name: 'Salvador',
    slug: 'salvador',
  },
  {
    name: 'Fortaleza',
    slug: 'fortaleza',
  },
];

const columns: Array<{ key: keyof Cidade; title: string }> = [
  { key: 'name', title: 'Invoice' },
  { key: 'slug', title: 'Status' },
];

export default function Cidades() {
  return (
    <Layout>
      <DataGrid<Cidade> data={cities} columns={columns} />
    </Layout>
  );
}
