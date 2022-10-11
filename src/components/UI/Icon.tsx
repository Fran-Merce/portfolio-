import { type } from 'os';
import React from 'react';

type SizeIcon = 'xs' | 'sm' | 'md' | 'la' | 'xl' | 'xxl';
interface IconProps {
  size?: SizeIcon;
  src: string;
  alt?: string;
}
const sizeIcons = {
  xs: '14px',
  sm: '24px',
  md: '32px',
  la: '48px',
  xl: '64px',
  xxl:'128'
} as const

export const Icon = ({ src, size = 'sm', alt }: IconProps) => {
  const sizeIcon = { width: sizeIcons[size], heigh: sizeIcons[size] };
  return <img src={src} style={sizeIcon} className={`inline`} alt={alt} />;
};
