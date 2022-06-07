import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Divider } from './Divider';

export default {
  title: 'Divider',
  component: Divider,
  argTypes: {
    label: { control: 'text' },
    textAlign: {
      options: ['left', 'right', 'center'],
      control: { type: 'select' }
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = ({ label, textAlign, orientation }) => (
  <Divider orientation={orientation} textAlign={textAlign} label={label} />
);
