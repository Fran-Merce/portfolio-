import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Iprops {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileButton = ({ setOpen, open }: Iprops) => {
  return (
    <GiHamburgerMenu
      className='md:hidden'
      onClick={() => setOpen(!open)}
      color='#22e3dd'
      size={'2.5rem'}
    />
  );
};
