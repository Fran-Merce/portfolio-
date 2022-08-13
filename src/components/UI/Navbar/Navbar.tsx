import { NavLinks } from './NavLinks';
import logo from '@/assets/Logos/fran.m.svg';

import {useState } from 'react';
import { useResize } from '@/hooks/useResize';
import { MobileButton } from './MobileButton';
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isPhone = useResize(768);
  return (
    <nav className='h-24 absolute top-0   bg-black/50 w-full flex items-center justify-between px-4 '>
      <img className='h-full' src={logo} alt='' />
      {open && isPhone && <NavLinks />}
      {!isPhone && <NavLinks />}
      <MobileButton setOpen={setOpen} open={open}/>
    </nav>
  );
};
