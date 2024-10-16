'use client';

import React from 'react';

import {
  Home,
  MapPinHouse,
  Users,
  UserPlus,
  LogOut,
  Building,
} from 'lucide-react';
import { Logo } from '../logo';
import Link from 'next/link';

const Sidebar = () => {
  const Menus = [
    {
      title: 'Página Inicial',
      icon: <Home className="h-5 w-5" />,
      url: '/home',
    },
    {
      title: 'Cidades',
      icon: <Building className="h-5 w-5" />,
      url: '/cidades',
    },
    {
      title: 'Imóveis',
      icon: <MapPinHouse className="h-5 w-5" />,
      url: '/imoveis',
    },

    {
      title: 'Clientes',
      icon: <UserPlus className="h-5 w-5" />,
      url: '/clientes',
    },
    {
      title: 'Usuários',
      icon: <Users className="h-5 w-5" />,
      url: '/usuarios',
    },
    { title: 'Sair', icon: <LogOut className="h-5 w-5" />, url: '/sair' },
  ];

  return (
    <div className="flex">
      <div className="w-64 bg-black h-screen  pt-8 relative">
        <div className="flex gap-x-4 items-center">
          <Logo />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex mt-1 p-2 cursor-pointer 
                hover:bg-gray-700 text-gray-300 text-sm items-center gap-x-4 
              ${index === 0 && 'bg-gray-700'}`}
            >
              <span className="text-lg">{Menu.icon}</span>
              <span className="font-medium tracking-wide text-base">
                <Link href={Menu.url}>{Menu.title}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
