import React, { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

interface Props {
  icon: ReactElement;
  text: string;
}

export const SkillCard = ({ icon, text }: Props) => {
  return (
    <div className='max-w-[150px]  flex flex-col items-center justify-center gap-4 '>
      {icon}
      <p className='text-stone-300 text-xl text-center'>{text}</p>
    </div>
  );
};
