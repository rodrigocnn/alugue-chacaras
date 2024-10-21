'use client';

import { ReactNode } from 'react';
import Sidebar from '../sidebar';

import { Header } from '../header';

interface ILayoutProps {
  children: ReactNode;
  bgColor?: 'transparent' | 'bg-white';
}

const Layout = ({ children, bgColor = 'bg-white' }: ILayoutProps) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main>
            <div className="mx-auto  max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className={`p-4 ${bgColor}`}>{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
