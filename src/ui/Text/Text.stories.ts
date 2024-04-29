import type { Meta, StoryObj } from '@storybook/react';
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
    children: "Przykładowy tekst",
  },
};

export const Secondary: Story = {
    args: {
        children: "Przykładowy tekst z ramką",
        className:"border w-fit"
      },
};

