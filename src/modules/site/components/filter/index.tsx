'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Filter() {
  const router = useRouter();

  const teste = (value: string) => {
    alert(value);
    //router.push('/casa-de-mae');
  };

  return (
    <div className="flex mt-8 gap-2 rounded-lg p-4 bg-white mb-4">
      <Select onValueChange={teste}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione uma cidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="sao-jose-do-rio-preto">
              São José do Rio Preto
            </SelectItem>
            <SelectItem value="guarulhos">Guarulhos</SelectItem>
            <SelectItem value="campinas">Campinas</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Distância" />
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

      <Input placeholder="Buscar pelo nome " />

      <Button className="bg-purple-900">Buscar</Button>
    </div>
  );
}
