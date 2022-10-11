import { type } from 'os';
import React from 'react';

type SizeIcon = 'xs' | 'sm' | 'md' | 'la' | 'xl';
interface IconProps {
  size?: SizeIcon;
  src: string;
  alt?: string;
}
const sizeIcons = {
  xs: '8',
  sm: '10',
  md: '14',
} as Record<SizeIcon, string>;

export const Icon = ({ src, size = 'sm', alt }: IconProps) => {
  const sizeIcon = sizeIcons[size];
  return (

    <img src={src} className={`inline w-${sizeIcon} h-${sizeIcon}`} alt={alt} />
  )


}


