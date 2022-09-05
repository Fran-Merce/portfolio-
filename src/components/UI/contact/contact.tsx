import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { useEffect, useState, useRef } from 'react';
const iconStyle = 'text-cyan-500 opacity-[0.5] hover:opacity-100';

export const Contact = () => {
  const [render, setRender] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 138
        ? setRender(false)
        : setRender(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if(!render) return null;
  return (
   
      <ul className='flex-col hidden   sm:flex fixed z-50 bottom-1 left-[3%] text-2xl gap-4'>
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
