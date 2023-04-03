import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from './contact-form';

const meta = {
  title: 'Components / Forms / ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};
