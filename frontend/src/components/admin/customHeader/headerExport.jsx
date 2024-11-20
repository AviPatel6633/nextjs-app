'use client';
import React from 'react';
// import HeaderMain from './header';
import Header from './header';
import { usePathname } from 'next/navigation';

const HeaderExport = ({ children }) => {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith('/admin');
  return (
    <>
      {isAdminPath  ? (
        pathname === '/admin/login' ? (
          children
        ) : (
          <Header content={children} />
        )
      ) : (
        children
      )}
    </>
  );
};

export default HeaderExport;
