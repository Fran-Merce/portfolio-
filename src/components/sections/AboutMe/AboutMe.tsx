import React from 'react';
import imgPerfil from '@/assets/imgPerfil.png';
import imgPerfilRounded from '@/assets/imgPerfilRounded.png';
export const AboutMe = () => {
  return (
    <section className='section md:justify-evenly md:p-8 container   flex-col-reverse md:flex-row relative '>
      <h2
        data-aos=''
        className=' top-0 text-3xl md:text-6xl text-cyan-300 mb-4 absolute left-4 md:top-20'
      >
        SOBRE MI----------
      </h2>
      <div className='md:w-2/3  max-w-md p-6'>
        <p className='md:max-w-md text-stone-300'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur et rerum
          laudantium. Quasi, quis et laudantium, adipisci vel, a dolorem fuga ab
          dolore illum corrupti odio eaque maiores magni repellendus? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Tenetur neque ea dolorem aut
          dolores id recusandae temporibus adipisci omnis? Enim qui obcaecati totam
          voluptas ipsa et officiis numquam id mollitia!
        </p>
      </div>
      <div className='w-2/3  md:w-1/3 max-w-xs p-6 backdrop-blur-xl border-b-[1px] border-cyan-600/40 border-r-[1px] transition-colors'>
        <img
          className=' object-cover filter  transition-all duration-500 backdrop-blur-md h-[90%] object-center opacity-15'
          src={imgPerfil}
          alt=''
        />
      </div>
    </section>
  );
};