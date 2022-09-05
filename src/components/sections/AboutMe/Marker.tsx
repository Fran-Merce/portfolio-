import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement | string;
}

export const Marker = ({ children }: Props) => (
  <span className='text-blue-400'>{children}</span>
);
