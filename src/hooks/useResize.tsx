import { useEffect, useState } from 'react';

export const useResize = (mediaQuery: number = 768): boolean => {
  const [isPhone, setIsPhone] = useState(
    window.innerWidth <= mediaQuery ? true : false
  );

  const handleResize = () => {
    window.innerWidth <= mediaQuery ? setIsPhone(true) : setIsPhone(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return isPhone;
};
