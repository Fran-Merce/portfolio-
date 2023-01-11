import React, { ReactElement } from "react";

interface Iprops {
  href: string;
  children: ReactElement | string;
}
export const Link = ({ children, href }: Iprops) => {
  return (
    <a className="text-purple-600 hover:text-cyan-500 " href={href}>
      {children}
    </a>
  );
};
