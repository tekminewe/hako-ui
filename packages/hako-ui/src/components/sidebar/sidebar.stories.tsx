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
    backgroundClassName: 'bg-purple-600',
    hoverClassName: 'hover:bg-purple-800',
    textClassName: 'text-white',
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

export const WithoutIcon: Story = {
  args: {
    className: 'border-r border-gray-200',
    backgroundClassName: 'bg-purple-600',
    hoverClassName: 'hover:bg-purple-800',
    textClassName: 'text-white',
    sections: [
      {
        items: [
          {
            title: 'Dashboard',
          },
          {
            title: 'Support',
            alwaysShowSubItems: true,
            subItems: [
              {
                title: 'Chat',
              },
              {
                title: 'Agents',
              },
            ],
          },
          {
            title: 'Permissions',
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
      {
        title: 'My Teams',
        items: [
          {
            title: 'Teams',
          },
          {
            title: 'Organizations',
          },
        ],
      },
    ],
  },
};

export const WithHeader: Story = {
  args: {
    ...Complete.args,
    header: {
      title: 'Adam Inc.',
      subtitle: 'Tek Min',
    },
  },
};

export const WithHeaderAndDropdown: Story = {
  args: {
    ...WithHeader.args,
    header: {
      ...WithHeader.args?.header,
      title: WithHeader.args?.header?.title ?? '',
      subtitle: WithHeader.args?.header?.title ?? '',
      dropdown: {
        sections: [
          {
            items: [
              {
                id: 'Profile',
                label: 'Profile',
              },
              {
                id: 'Logout',
                label: 'Logout',
              },
            ],
          },
        ],
      },
    },
  },
};
