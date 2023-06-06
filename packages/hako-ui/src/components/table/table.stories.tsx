import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './table';

const meta = {
  title: 'Components / Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
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
    data: [
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

export const Clickable: Story = {
  args: {
    columns: [],
    data: [],
  },
  render: () => {
    return (
      <div>
        <Table<{ name: string; email: string; role: string; status: string; action: string }>
          columns={[
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
          ]}
          data={[
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
          ]}
          onRowClick={console.log}
        />
      </div>
    );
  },
};

export const Empty: Story = {
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
    data: [],
  },
};
