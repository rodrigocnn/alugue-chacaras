'use client';

import React from 'react';

import {
  Home,
  MapPinHouse,
  Film,
  Users,
  UserPlus,
  LogOut,
  Building,
} from 'lucide-react';
import { Logo } from '../logo';

const Sidebar = () => {
  const Menus = [
    { title: 'Página Inicial', icon: <Home className="h-5 w-5" /> },
    { title: 'Cidades', icon: <Building className="h-5 w-5" /> },
    { title: 'Imóveis', icon: <MapPinHouse className="h-5 w-5" /> },
    { title: 'Galerias', icon: <Film className="h-5 w-5" /> },
    { title: 'Clientes', icon: <UserPlus className="h-5 w-5" /> },
    { title: 'Usuários', icon: <Users className="h-5 w-5" /> },
    { title: 'Sair', icon: <LogOut className="h-5 w-5" /> },
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
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
