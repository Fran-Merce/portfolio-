import React, { useEffect, useState } from 'react';
import { Footer } from '../sections/Footer/Footer';
import { Navbar } from '../UI';
import {AiOutlineArrowUp} from 'react-icons/ai'
import Aos from 'aos';
import { useHero } from '@/hooks/useHero';
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: Props) => {
  const { isOnHero, handleClick } = useHero();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='min-h-screen bg-transparent flex flex-col'>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer
        theme='dark'
        autoClose={3000}
        position='top-center'
        limit={3}
        className='w-full text-sm font-firaCode grid place-content-center my-0 mx-auto'
      />
      {isOnHero && (
        <button  onClick={handleClick} className='arrow-up bg-cyan-600'>
          <AiOutlineArrowUp/>
        </button>
      )}
    </div>
  );
};
