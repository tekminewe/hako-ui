import type { Meta, StoryObj } from '@storybook/react';

import { RegisterForm } from './register-form';

const meta = {
  title: 'Components / Forms / RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterForm>;

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
