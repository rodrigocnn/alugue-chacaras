'use client';

import { Button } from '@/components/ui/button';

import Layout from '@/components/custom/layout';
import { DataGrid } from '@/components/custom/datagrid';
import { columns } from '@/modules/proprietarios/columns';
import { useGetProprietarios } from '@/modules/proprietarios/hooks/useGetProprietarios';

export default function Usuarios() {
  const { queryProprietarios } = useGetProprietarios();

  return (
    <Layout>
      <Button type="submit">Novo Usuário</Button>
      <DataGrid data={queryProprietarios.data || []} columns={columns} />
    </Layout>
  );
}
