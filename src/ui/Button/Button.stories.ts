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
    className:"bg-red-800 border-red-600 hover:bg-red-700"
  },
};

export const Green: Story = {
    args: {
        label: "Wtorek",
        className: "bg-green-800 border-green-600 hover:bg-green-700"
      },
};

export const Blue: Story = {
    args: {
        label: "Środa",
        className: "bg-blue-800 border-blue-600 hover:bg-blue-700"
      },
};

export const Disabled: Story = {
    args: {
        label: "Disabled",
        className:"bg-slate-50 text-gray-800",
        disabled:true
      },
};



