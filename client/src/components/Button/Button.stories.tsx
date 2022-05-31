import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Default' }
  }
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = ({ children }) => <Button>{children}</Button>;
