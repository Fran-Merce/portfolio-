import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/Fi';
import { GoMail } from 'react-icons/Go';
const iconStyle = 'text-cyan-500 opacity-[0.5] hover:opacity-100';

export const Contact = () => {
  return (
    <ul className='flex-col hidden  sm:flex fixed z-50 bottom-1 left-[3%] text-2xl gap-4'>
      <li>
        <a href='https://github.com/Fran-Merce' target={'_blank'}>
          <FiGithub className={iconStyle} />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/francisco-merce/' target={'_blank'}>
          <FiLinkedin className={iconStyle} />
        </a>
      </li>
      <li>
        <a href='mailto:franmerce1@gmail.com' target={'_blank'}>
          <GoMail className={iconStyle} />
        </a>
      </li>
      <div className=' w-[1px] h-[5rem] bg-cyan-500/60 m-auto'></div>
    </ul>
  );
};
