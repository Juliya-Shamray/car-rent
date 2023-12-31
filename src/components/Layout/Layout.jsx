import { Header } from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header className="container" />
      <main>
        <Outlet />
      </main>
    </>
  );
};
