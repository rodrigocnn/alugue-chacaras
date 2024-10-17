import React from 'react';
import { FormField, FormItem, FormLabel } from '@/components/ui/form';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface IInputFormProps {
  label: string;
  form: UseFormReturn<FieldValues, any, undefined>;
  name: string;
  component: React.ReactNode;
}

export function FormFieldCustom({
  form,
  name,
  label,
  component,
}: IInputFormProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {React.cloneElement(component as React.ReactElement, { ...field })}
        </FormItem>
      )}
    />
  );
}
