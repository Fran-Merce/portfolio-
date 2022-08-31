import { NavLinks } from './NavLinks';
import logo from '../../../assets/Logos/logo1.svg';
import { useState } from 'react';
import { useResize } from '@/hooks/useResize';
import { MobileButton } from './MobileButton';
import { Link } from './Link';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isPhone = useResize(768);
  return (
    <header>
      <nav className='h-24 w-full flex items-center justify-between px-4 '>
        <Link href='/'>
          <img  src={logo} alt='logo' />
        </Link>
        {open && isPhone && <NavLinks />}
        {!isPhone && <NavLinks />}
        <MobileButton setOpen={setOpen} open={open} />
      </nav>
    </header>
  );
};
