import React, { useState } from 'react';
import { Footer } from '../sections/Footer/Footer';
import { Navbar } from '../UI';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: Props) => {


  return (
    <div className='min-h-screen bg-transparent flex flex-col'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
