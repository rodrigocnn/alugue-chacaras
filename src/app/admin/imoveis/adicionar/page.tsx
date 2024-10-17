'use client';

import { Input } from '@/components/ui/input';

import Layout from '@/components/custom/layout';
import { Label } from '@/components/ui/label';
import { Form, FormItem } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { MultiSelect } from '@/components/custom/multi-select';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { SeparatorForm } from '@/components/custom/separator-form';
import { useGetCidades } from '@/modules/cidades/hooks/useGetCidades';
import { FieldValues, useForm } from 'react-hook-form';
import { FormFieldCustom } from '@/components/custom/input-form';

interface IMultiSelectList {
  value: string;
  label: string;
}

export default function AdicionarImovel() {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [selectCidades, setSelectCidades] = useState<IMultiSelectList[]>([]);
  const { queryCidades } = useGetCidades();
  const form = useForm();

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

  const onSubmit = (data: FieldValues) => {
    console.log('Data', data);
  };

  return (
    <Layout bgColor="transparent">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-4">
            <div className="w-3/5 flex  flex-col">
              <div className="bg-white flex p-4 gap-4 flex-col">
                <FormFieldCustom
                  name={'name'}
                  label="Nome da Propriedade"
                  form={form}
                  component={<Input />}
                />

                <FormFieldCustom
                  name="description"
                  label="Descrição"
                  form={form}
                  component={<Textarea />}
                />
              </div>

              <SeparatorForm title="Características" />

              <div className="bg-white flex p-4 gap-4 flex-col">
                <FormFieldCustom
                  name="about"
                  label="Sobre"
                  form={form}
                  component={<Textarea />}
                />

                <div className="flex gap-2">
                  <FormFieldCustom
                    name="about"
                    label="Quartos"
                    form={form}
                    component={<Input type="number" />}
                  />

                  <FormFieldCustom
                    name="bathrooms"
                    label="Banheiros"
                    form={form}
                    component={<Input type="number" />}
                  />
                  <FormFieldCustom
                    name="accommodations"
                    label="Acomodações"
                    form={form}
                    component={<Input type="number" />}
                  />

                  <FormItem>
                    <Label>Salão de Festas?</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                </div>

                <FormFieldCustom
                  label="Lazer"
                  name="leisure"
                  form={form}
                  component={<Input />}
                />

                <FormFieldCustom
                  label="Localicação"
                  name="location"
                  form={form}
                  component={<Input />}
                />

                <FormFieldCustom
                  label="Google Maps"
                  name="googleMaps"
                  form={form}
                  component={<Input />}
                />
                <div>
                  <Button type="submit">Salvar</Button>
                </div>
              </div>
            </div>

            <div className="w-2/5 bg-white flex p-4 gap-4 flex-col">
              <div className="flex gap-4 flex-col">
                <FormItem>
                  <Label>Cidades</Label>

                  <MultiSelect
                    options={selectCidades}
                    onValueChange={setSelectedFrameworks}
                    defaultValue={selectedFrameworks}
                    placeholder="Selecione Cidades"
                    variant="inverted"
                    animation={2}
                    maxCount={3}
                  />
                </FormItem>

                <div>
                  <Button type="submit">Adicionar Fotos</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </Layout>
  );
}
