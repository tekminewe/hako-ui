import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './alert';

const meta = {
  title: 'Components / Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Alert>This is a error</Alert>
        <Alert type="info">This is an info</Alert>
        <Alert type="warning">This is a warning</Alert>
        <Alert type="success">This is a success message</Alert>
      </div>
    );
  },
};
