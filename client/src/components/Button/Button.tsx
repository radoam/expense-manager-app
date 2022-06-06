import React, { FC } from 'react';

import { ButtonProps } from './Button.types';

const classes = {
  base: 'bg-blue outline-none text-sm text-white font-medium rounded-xl transition active:scale-95 w-auto min-w-48 h-10',
  disabled: 'opacity-50 transition-none active:scale-100 cursor-default',
  size: {
    xs: 'text-xs h-6 min-w-20 rounded-[7px]',
    sm: 'text-sm h-8 min-w-36 rounded-[9px]',
    lg: 'text-base h-11 min-w-60 rounded-[14px]',
    xl: 'text-lg h-14 min-w-72 rounded-[18px]'
  }
};

export const Button: FC<ButtonProps> = ({ children, disabled, size }) => (
  <button
    className={`
    ${classes.base} 
    ${disabled && classes.disabled}
    ${classes.size[size]}
  `}
    disabled={disabled}>
    {children}
  </button>
);
