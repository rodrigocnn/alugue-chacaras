import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-purple-900 w-full p-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo-teste.png" // Substitua pelo caminho correto da sua logo
            alt="Logo"
            width={197}
            height={48}
          />
        </div>
        {/* Menu */}
        <nav className="flex space-x-4">
          <a href="#" className="text-white font-semibold">
            Home
          </a>
          <a href="#" className="text-white font-semibold">
            Sobre
          </a>
          <a href="#" className="text-white font-semibold">
            Anuncie
          </a>
          <a href="#" className="text-white font-semibold">
            Blog
          </a>
          <a href="#" className="text-white font-semibold">
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}
