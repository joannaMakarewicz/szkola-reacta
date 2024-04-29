import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  args:{onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    label: "Poniedziałek",
  },
};

export const Green: Story = {
    args: {
        label: "Wtorek",
      },
};

export const Blue: Story = {
    args: {
        label: "Środa",
      },
};

export const Disabled: Story = {
    args: {
        label: "Środa",
      },
};



