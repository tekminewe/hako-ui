import type { Meta, StoryObj } from '@storybook/react';

import { Editor } from './editor';

const meta = {
  title: 'Components / Editor',
  component: Editor,
  tags: ['autodocs'],
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
