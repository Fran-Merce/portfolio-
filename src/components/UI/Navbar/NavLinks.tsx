import { Link } from './Link';

export const NavLinks = () => {
  return (
    <div className='text-lg absolute h-96  bg-black/60  w-full top-24 right-0 flex flex-col items-center justify-center gap-10 md:static md:flex-row md:h-fit md:w-fit md:bg-transparent md:gap-3'>
      <Link href='/'>Proyectos</Link>
      <Link href='/'>Sobre mi</Link>
      <Link href='/'>Contacto</Link>
      <Link href='/'>Habilidades</Link>
    </div>
  );
};
