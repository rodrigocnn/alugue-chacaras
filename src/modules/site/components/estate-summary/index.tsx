import Image from 'next/image';

import { BedSingle } from 'lucide-react';

export function EstateSummary() {
  return (
    <div className="relative bg-white p-4 shadow-md rounded-lg overflow-hidden">
      <Image
        src="/images/imovel.avif"
        alt="Imóvel"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', maxHeight: '425px' }}
        className="rounded-t-lg"
      />
      {/* Título sobre a imagem */}
      <h2 className="absolute bg-purple-900 mt-2 top-4 left-4  text-white text-sm font-semibold p-2 ">
        Ribeirão Preto - SP
      </h2>
      <div className="mt-2">
        <h3 className="text-normal font-semibold text-slate-600">
          Chácara Recanto dos Beija Flores
        </h3>
        <p className="text-sm text-gray-500 ">
          Região: Bairro Florestan Fernandes
        </p>
        <div className="flex justify-start items-center mt-2 text-gray-700">
          <span className="mr-4 gap-1 flex">
            <BedSingle />4 Quartos
          </span>
          <span>|</span>
          <span className="mx-4">20 Pessoas</span>
        </div>
      </div>
    </div>
  );
}
