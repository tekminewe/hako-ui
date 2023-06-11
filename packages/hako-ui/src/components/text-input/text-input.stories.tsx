import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './text-input';

const meta = {
  title: 'Components/Forms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    placeholder: 'Enter your email address',
  },
};

export const WithLabel: Story = {
  args: {
    ...Simple.args,
    label: 'Email address',
  },
};

export const Disabled: Story = {
  args: {
    ...WithLabel.args,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    ...WithLabel.args,
    required: true,
    status: 'error',
    hint: 'Please enter a valid email address',
  },
};

export const WithSuccess: Story = {
  args: {
    ...WithLabel.args,
    status: 'success',
    hint: 'Your email address is valid',
  },
};

export const WithAndorment: Story = {
  args: {
    label: 'Your Hako UI subdomain',
    andorment: (
      <div className="px-4 h-full flex items-center justify-center">
        <p>.hakoui.com</p>
      </div>
    ),
  },
};
