'use client';

import Image from 'next/image';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Header() {
  const teste = (value: string) => {
    alert(value);
    //router.push('/casa-de-mae');
  };

  return (
    <header className="bg-white w-full p-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image
            src="/images/logo-teste.png" // Substitua pelo caminho correto da sua logo
            alt="Logo"
            width={197} // Escolha a largura apropriada
            height={48} // Escolha a altura apropriada
          />

          <Select onValueChange={teste}>
            <SelectTrigger>
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
        </div>
        {/* Menu */}

        <nav className="flex space-x-4">
          <a href="#" className="text-purple-900 font-semibold">
            Home
          </a>
          <a href="#" className="text-black font-semibold">
            Sobre
          </a>
          <a href="#" className="text-black font-semibold">
            Anuncie
          </a>
          <a href="#" className="text-black font-semibold">
            Blog
          </a>
          <a href="#" className="text-black font-semibold">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
