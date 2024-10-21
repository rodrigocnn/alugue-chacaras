'use client';

import Layout from '@/components/custom/layout';
import { DataGrid } from '@/components/custom/datagrid';
import { columns } from '@/modules/imoveis/columns';
import { useGetImoveis } from '@/modules/imoveis/hooks/useGetImoveis';
import { Button } from '@/components/ui/button';

export default function Imoveis() {
  const { queryImoveis } = useGetImoveis();

  return (
    <Layout>
      <Button type="submit">Novo Imóvel</Button>
      <DataGrid data={queryImoveis.data || []} columns={columns} />
    </Layout>
  );
}
