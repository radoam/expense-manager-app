import React, { FC } from 'react';

import { ButtonProps } from './Button.types';

const classes = {
  base: 'bg-blue outline-none text-sm text-white font-medium rounded-[12px] transition active:scale-95 w-auto min-w-48 h-10 pr-3.5 pl-3.5',
  disabled: 'opacity-50 transition-none active:scale-100 cursor-default',
  size: {
    xs: 'text-xs h-6 min-w-20 rounded-[7px] pr-1.5 pl-1.5',
    sm: 'text-sm h-8 min-w-36 rounded-[9px] pr-2.5 pl-2.5',
    md: 'text-sm min-w-48 h-10 rounded-[12px] pr-3.5 pl-3.5',
    lg: 'text-base h-11 min-w-60 rounded-[14px] pr-5 pl-5',
    xl: 'text-lg h-14 min-w-72 rounded-[18px] pl-6 pr-6',
    auto: 'w-auto min-w-0 pr-5 pl-5'
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
