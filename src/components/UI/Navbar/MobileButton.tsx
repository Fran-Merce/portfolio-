import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Iprops {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileButton = ({ setOpen, open }: Iprops) => {
  return (
    <div onClick={() => setOpen(!open)} className='md:hidden'>
      <GiHamburgerMenu color='#22e3dd' size={'2.5rem'} />
    </div>
  );
};
