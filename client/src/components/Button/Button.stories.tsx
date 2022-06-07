import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Default' },
    disabled: { control: 'boolean', defaultValue: false },
    size: {
      options: ['xs', 'sm', 'lg', 'xl', 'auto'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = ({ children, disabled, size }) => (
  <Button disabled={disabled} size={size}>
    {children}
  </Button>
);
