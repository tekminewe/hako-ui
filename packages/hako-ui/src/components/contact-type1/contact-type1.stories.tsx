import type { Meta, StoryObj } from '@storybook/react';
import { FiBluetooth } from 'react-icons/fi';

import { ContactType1 } from './contact-type1';

const meta = {
  title: 'Components/Contact/ContactType1',
  component: ContactType1,
  tags: ['autodocs'],
} satisfies Meta<typeof ContactType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Contact Us',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};
