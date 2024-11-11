'use client';

import { Input } from '@/components/ui/input';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import Layout from '@/components/custom/layout';

import { useCreateCidade } from '@/modules/cidades/hooks/useCreateCidade';

import { Label } from '@/components/ui/label';

export default function AdicionarCidade() {
  const { onSubmit, manipularInput, form } = useCreateCidade();

  return (
    <Layout bgColor="transparent">
      <form
        encType="multipart/form-data"
        onSubmit={onSubmit}
        className="space-y-8"
      >
        <div className="flex gap-4">
          <div className="w-full flex  flex-col">
            <div className="bg-white flex p-4 gap-4 flex-col">
              <div className="space-y-2">
                <Label htmlFor="terms">Cidade</Label>
                <Input
                  value={form.name}
                  onChange={manipularInput}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="terms">Slug</Label>
                <Input value={form.slug} autoComplete="off" />
              </div>

              <div>
                <Button type="submit">Salvar</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
