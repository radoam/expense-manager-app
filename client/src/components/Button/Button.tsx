import React, { FC } from 'react';

import { ButtonProps } from './Button.types';

const classes = {
  base: 'bg-blue outline-none w-48 text-sm text-white h-10 font-medium rounded-xl transition active:scale-95',
  disabled: 'bg-gray-dark text-gray transition-none active:scale-100 cursor-default'
};

export const Button: FC<ButtonProps> = ({ children, disabled }) => (
  <button
    className={`
    ${classes.base} 
    ${disabled && classes.disabled}
  `}
    disabled={disabled}>
    {children}
  </button>
);
