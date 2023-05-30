import type { Meta, StoryObj } from '@storybook/react';

import { ProTable } from './pro-table';

const meta = {
  title: 'Components / ProTable',
  component: ProTable,
  tags: ['autodocs'],
} satisfies Meta<typeof ProTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        key: 'name',
      },
      {
        title: 'Email',
        key: 'email',
      },
      {
        title: 'Role',
        key: 'role',
      },
      {
        title: 'Status',
        key: 'status',
      },
      {
        title: 'Action',
        key: 'action',
      },
    ],
    datas: [
      {
        name: 'John Doe',
        email: 'haha@mail.com',
        role: 'Admin',
        status: 'Active',
        action: 'Edit',
      },
      {
        name: 'John Doe',
        email: 'hehe@mail.com',
        role: 'Admin',
        status: 'Active',
        action: 'Edit',
      },
    ],
  },
};
