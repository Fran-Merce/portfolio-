import { useEffect, useState } from "react";

export const useHero = () => {
  const [isOnHero, setIsOnHero] = useState<boolean>(false);

  const handleScroll = () => {
    window.scrollY > window.innerHeight / 2 ? setIsOnHero(true) : setIsOnHero(false);
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return {isOnHero,handleClick} ;
}