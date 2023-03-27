import type { Meta, StoryObj } from '@storybook/react';

import { FooterType1 } from './footer-type1';

const meta = {
  title: 'Components/Footer/FooterType1',
  component: FooterType1,
  tags: ['autodocs'],
} satisfies Meta<typeof FooterType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    copyright: '© 2021 Hako UI. All rights reserved.',
  },
};
