'use client';
import React from 'react';
import HeaderMain from './header';
import { usePathname } from 'next/navigation';

const HeaderExport = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/admin' ? (
        pathname === '/admin/login' ? (
          children
        ) : (
          <HeaderMain content={children} />
        )
      ) : (
        children
      )}
    </>
  );
};

export default HeaderExport;
