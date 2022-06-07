import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
};
