import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './select';

const meta = {
  title: 'Components / Forms / Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
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

export const Long: Story = {
  args: {
    placeholder: 'Unassigned',
    dropdownTitle: 'Places',
    className: 'w-[250px]',
    options: [
      {
        id: 1,
        label: 'James',
      },
      {
        id: 2,
        label: 'Katherine',
      },
      {
        id: 3,
        label: 'Oliver',
      },
    ],
  },
};
