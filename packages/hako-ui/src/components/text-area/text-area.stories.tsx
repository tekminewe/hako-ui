import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './text-area';

const meta = {
  title: 'Components/Forms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    placeholder: 'Enter your message',
  },
};

export const WithLabel: Story = {
  args: {
    ...Simple.args,
    label: 'Your message',
  },
};

export const WithError: Story = {
  args: {
    ...WithLabel.args,
    required: true,
    status: 'error',
    hint: 'Your message is too long',
  },
};

export const WithSuccess: Story = {
  args: {
    ...WithLabel.args,
    status: 'success',
    hint: 'We will get back to you soon',
  },
};
