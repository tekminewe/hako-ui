import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './login-form';

const meta = {
  title: 'Components / Forms / LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    inputProps: {
      email: {
        hint: 'Please enter your email address',
        status: 'error',
      },
      password: {
        hint: 'Please enter your password',
        status: 'error',
      },
    },
  },
};
