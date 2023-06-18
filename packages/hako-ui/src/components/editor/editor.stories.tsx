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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const PreviewOnly: Story = {
  args: {
    previewOnly: true,
    value: [
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        type: 'paragraph',
        children: [{ text: 'This is a preview only' }],
      },
    ],
  },
};
