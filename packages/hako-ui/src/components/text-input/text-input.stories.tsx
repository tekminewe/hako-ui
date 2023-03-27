import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './text-input';

const meta = {
  title: 'Components/Forms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {};
