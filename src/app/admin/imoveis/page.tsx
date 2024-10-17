'use client';

import Layout from '@/components/custom/layout';
import { DataGrid } from '@/components/custom/datagrid';
import { columns } from '@/modules/imoveis/columns';
import { useGetImoveis } from '@/modules/imoveis/hooks/useGetImoveis';

export default function Imoveis() {
  const { queryImoveis } = useGetImoveis();

  return (
    <Layout>
      <DataGrid data={queryImoveis.data || []} columns={columns} />
    </Layout>
  );
}
