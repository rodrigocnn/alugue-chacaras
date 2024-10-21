'use client';

import { Button } from '@/components/ui/button';

import Layout from '@/components/custom/layout';
import { DataGrid } from '@/components/custom/datagrid';
import { useGetCidades } from '@/modules/cidades/hooks/useGetCidades';
import { columns } from '@/modules/cidades/columns';

export default function Cidades() {
  const { queryCidades } = useGetCidades();

  return (
    <Layout>
      <Button type="submit">Nova Cidade</Button>
      <DataGrid data={queryCidades.data || []} columns={columns} />
    </Layout>
  );
}
