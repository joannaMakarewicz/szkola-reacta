import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Text } from './Text';

const meta = {
  title: 'ui/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello Amigos"
  },
};

export const Secondary: Story = {
    args: {
        children: "Hola!"
      },
};

