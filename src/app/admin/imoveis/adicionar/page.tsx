'use client';

import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';
import { Form, FormItem } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Dropzone, FileMosaic } from '@files-ui/react';
import { useForm } from 'react-hook-form';
import { FormFieldCustom } from '@/components/custom/input-form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import Layout from '@/components/custom/layout';
import { SeparatorForm } from '@/components/custom/separator-form';
import { useCreateImovel } from '@/modules/imoveis/hooks/useCreateImovel';
import { Checkbox } from '@/components/ui/checkbox';
import InputMoney from '@/components/custom/input-money';

export default function AdicionarImovel() {
  const form = useForm();
  const {
    onSubmit,
    selectCidades,
    selectProprietarios,
    valorACombinar,
    imagemDestaque,
    updateImagemDestaque,
    manipularCheckbox,
  } = useCreateImovel();

  return (
    <Layout bgColor="transparent">
      <Form {...form}>
        <form
          encType="multipart/form-data"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="flex gap-4">
            <div className="w-3/5 flex  flex-col">
              <div className="bg-white flex p-4 gap-4 flex-col">
                <FormFieldCustom
                  name={'name'}
                  label="Nome da Propriedade"
                  form={form}
                  component={<Input autoComplete="off" />}
                />

                <FormFieldCustom
                  label="Proprietários"
                  name="userId"
                  form={form}
                  component={
                    <Select
                      onValueChange={(value) => form.setValue('userId', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione Proprietário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {selectProprietarios.map((user: any) => (
                            <SelectItem key={user.value} value={user.value}>
                              {user.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  }
                />

                <div className="flex gap-4">
                  <InputMoney
                    disabled={valorACombinar}
                    form={form}
                    label="Valor"
                    name="value"
                    placeholder="Valor do plano"
                  />

                  <div className="flex items-center pt-8  space-x-2">
                    <Checkbox onCheckedChange={manipularCheckbox} id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      A combinar
                    </label>
                  </div>
                </div>

                <FormFieldCustom
                  label="+ Informações do Valor "
                  name="infoValue"
                  form={form}
                  component={
                    <Input
                      disabled={valorACombinar}
                      placeholder="Ex: Valor por 3 dias"
                      autoComplete="off"
                    />
                  }
                />

                <FormFieldCustom
                  name="description"
                  label="Descrição"
                  form={form}
                  component={<Textarea autoComplete="off" />}
                />
              </div>

              <SeparatorForm title="Características" />

              <div className="bg-white flex p-4 gap-4 flex-col">
                <FormFieldCustom
                  name="about"
                  label="Sobre"
                  form={form}
                  component={<Textarea autoComplete="off" />}
                />

                <div className="flex gap-2">
                  <FormFieldCustom
                    name="bedrooms  "
                    label="Quartos"
                    form={form}
                    component={<Input autoComplete="off" type="number" />}
                  />

                  <FormFieldCustom
                    name="bathrooms"
                    label="Banheiros"
                    form={form}
                    component={<Input autoComplete="off" type="number" />}
                  />
                  <FormFieldCustom
                    name="accommodations"
                    label="Acomodações"
                    form={form}
                    component={<Input autoComplete="off" type="number" />}
                  />
                </div>

                <FormFieldCustom
                  label="Salão de Festas"
                  name="partyHall"
                  form={form}
                  component={<Input autoComplete="off" />}
                />

                <FormFieldCustom
                  label="Lazer"
                  name="leisure"
                  form={form}
                  component={<Input autoComplete="off" />}
                />

                <div>
                  <Button type="submit">Salvar</Button>
                </div>
              </div>
            </div>

            <div className="w-2/5  flex  flex-col">
              <div className="flex bg-white gap-4  p-4  flex-col">
                <FormItem>
                  <Label>Imagem de Destaque</Label>
                  <Dropzone
                    localization={'PT-pt'}
                    onChange={updateImagemDestaque}
                    value={imagemDestaque}
                    maxFiles={1}
                    accept="image/*"
                    footer={false}
                  >
                    {imagemDestaque.map((file: any) => (
                      <FileMosaic key={file} {...file} preview />
                    ))}
                  </Dropzone>
                </FormItem>
              </div>
              <SeparatorForm title="Localização" />

              <div className="flex bg-white gap-4  p-4 flex-col">
                <FormFieldCustom
                  label="Cidades"
                  name="cityId"
                  form={form}
                  component={
                    <Select
                      onValueChange={(value) => form.setValue('cityId', value)} // Atualiza o campo manualmente
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma cidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {selectCidades.map((cidade) => (
                            <SelectItem key={cidade.value} value={cidade.value}>
                              {cidade.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  }
                />

                <FormFieldCustom
                  label="Localização"
                  name="location"
                  form={form}
                  component={<Input autoComplete="off" />}
                />
                <FormFieldCustom
                  label="Google Maps"
                  name="googleMapsUrl"
                  form={form}
                  component={
                    <Input
                      placeholder="Link do Google Maps"
                      autoComplete="off"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
    </Layout>
  );
}
