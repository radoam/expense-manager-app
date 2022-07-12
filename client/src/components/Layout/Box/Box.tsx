import { FC, ReactNode } from 'react';

import { BoxStyled } from './Box.styles';

interface BoxProps {
  children: ReactNode;
}

export const Box: FC<BoxProps> = ({ children }) => <BoxStyled>{children}</BoxStyled>;
