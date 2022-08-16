import React, { ReactElement } from 'react';

interface Iprops {
  href: string;
  children: ReactElement | string;
}
export const Link = ({ children, href }: Iprops) => {
  return (
    <a className='text-cyan-400 hover:text-cyan-500 ' href={href}>
      {children}
    </a>
  );
};
