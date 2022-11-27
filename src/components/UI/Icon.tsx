type SizeIcon = 'xs' | 'sm' | 'md' | 'l' | 'la' | 'xl' | 'xxl';
interface IconProps {
  size?: SizeIcon;
  src: string;
  alt?: string;
  className?: string;
}
const sizeIcons = {
  xs: '14px',
  sm: '24px',
  md: '32px',
  l: '40px',
  la: '48px',
  xl: '64px',
  xxl: '128px',
} as const;

export const Icon = ({ src, size = 'sm', alt, className = '' }: IconProps) => {
  const sizeIcon = { width: sizeIcons[size], heigh: sizeIcons[size] };
  return (
    <img src={src} style={sizeIcon} className={`inline ${className}`} alt={alt} />
  );
};
