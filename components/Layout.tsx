import React from 'react';
import Navbar from './Navbar';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      <main className='p-24 text-center'>{children}</main>
    </>
  )
}