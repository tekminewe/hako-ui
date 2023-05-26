import type { Meta, StoryObj } from '@storybook/react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineApartment } from 'react-icons/ai';

import { Sidebar } from './sidebar';

const meta = {
  title: 'Components / Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    className: 'border-r border-gray-200',
    sections: [
      {
        items: [
          {
            title: 'Dashboard',
            icon: <AiOutlineHome size={24} />,
          },
          {
            title: 'Support',
            icon: <AiOutlineMessage size={24} />,
          },
          {
            title: 'Permissions',
            icon: <AiOutlineApartment size={24} />,
            subItems: [
              {
                title: 'Roles',
              },
              {
                title: 'Users',
              },
            ],
          },
        ],
      },
    ],
  },
};

export const AlwaysShowSubItems: Story = {
  args: {
    className: 'border-r border-gray-200',
    sections: [
      {
        items: [
          {
            title: 'Dashboard',
            icon: <AiOutlineHome size={24} />,
          },
          {
            title: 'Support',
            icon: <AiOutlineMessage size={24} />,
          },
          {
            title: 'Permissions',
            icon: <AiOutlineApartment size={24} />,
            alwaysShowSubItems: true,
            subItems: [
              {
                title: 'Roles',
              },
              {
                title: 'Users',
              },
            ],
          },
        ],
      },
    ],
  },
};
