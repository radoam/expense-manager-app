import { FC } from 'react';

import { DividerStyles } from './Divider.styles';
import { DividerProps } from './Divider.types';

export const Divider: FC<DividerProps> = ({ label, textAlign, orientation }) => (
  <DividerStyles data-content={label} textAlign={textAlign} orientation={orientation} />
);
