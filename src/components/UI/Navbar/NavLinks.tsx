import { useLangContext } from '@/context/lang.context';
import { LangSelector } from '../LangSelector';

import { Link } from './Link';
interface Link {
  href: string;
  text: string;
}
export const NavLinks = () => {
  const {
    langContextData: { navbar },
  } = useLangContext();
  return (
    <nav className='text-lg absolute h-96 z-50 bg-black/60 w-full top-24 right-0 flex flex-col items-center justify-center gap-10 md:static md:flex-row md:h-fit md:w-fit md:bg-transparent md:gap-3'>
      {navbar.map(({ href, text }: Link) => (
        <Link key={href} href={href}>
          {text}
        </Link>
      ))}
      <LangSelector />
    </nav>
  );
};
