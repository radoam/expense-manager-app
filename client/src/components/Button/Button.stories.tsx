import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Default' },
    disabled: { control: 'boolean', defaultValue: false }
  }
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = ({ children, disabled }) => (
  <Button disabled={disabled}>{children}</Button>
);
