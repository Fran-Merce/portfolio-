import { ReactElement } from 'react';

interface Props {
  children: ReactElement | string;
  color?: string;
}
const defaultColor = 'text-blue-400';

export const Marker = ({ children, color = defaultColor }: Props) => (
  <span className={color}>{children}</span>
);
