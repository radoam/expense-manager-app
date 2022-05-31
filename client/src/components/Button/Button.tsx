import React, { FC } from 'react';

import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = () => (
  <button className="focus:outline-none transition ease-in-out duration-300">Test</button>
);
