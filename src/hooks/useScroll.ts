import { useState, useEffect } from 'react';

export const useScroll = (elementSize: number) => {
  const [render, setRender] = useState<boolean>(true);


  useEffect(() => {
    const handleScroll = () => {
      window.innerHeight + window.scrollY >= document.body.offsetHeight - elementSize
        ? setRender(false)
        : setRender(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return render;
};
