import React from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: Props) => {
  return <div className='min-h-screen bg-transparent flex flex-col'>{children}</div>;
};
