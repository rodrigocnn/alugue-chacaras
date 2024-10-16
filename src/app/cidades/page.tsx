'use client';

import * as React from 'react';

import Layout from '@/components/personal/layout';

import { DataGrid } from '@/components/personal/datagrid';
import { useGetCidades } from '@/modules/cidades/hooks/useGetCidades';
import { columns } from '@/modules/cidades/columns';

export default function Cidades() {
  const { queryCidades } = useGetCidades();

  return (
    <Layout>
      <DataGrid data={queryCidades.data || []} columns={columns} />
    </Layout>
  );
}
