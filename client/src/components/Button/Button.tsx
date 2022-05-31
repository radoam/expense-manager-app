import React, { FC } from 'react';

import { ButtonProps } from './Button.types';

const classes = {
  base: 'bg-blue outline-none w-48 text-sm text-white h-10 font-medium rounded-xl transition active:scale-95'
};

export const Button: FC<ButtonProps> = () => <button className={classes.base}>Test</button>;
