import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from './contact-form';

const meta = {
  title: 'Components / Forms / ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    inputProps: {
      name: {
        hint: 'Please enter your name',
        status: 'error',
      },
      email: {
        hint: 'Please enter your email address',
        status: 'error',
      },
      message: {
        hint: 'Please enter your message',
        status: 'error',
      },
    },
  },
};
