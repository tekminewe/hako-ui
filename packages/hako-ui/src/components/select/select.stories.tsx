import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './select';

const meta = {
  title: 'Components / Forms / Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    placeholder: 'Favourite places',
    dropdownTitle: 'Places',
    className: 'w-[150px]',
    options: [
      {
        id: 1,
        label: 'My Home',
      },
      {
        id: 2,
        label: 'My Office',
      },
      {
        id: 3,
        label: 'My Grandparents House',
      },
    ],
  },
};
