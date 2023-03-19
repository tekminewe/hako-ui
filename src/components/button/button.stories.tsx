import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  render: () => (
    <div className="flex flex-col space-y-md items-start">
      <Button color="primary">Primary</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
    </div>
  ),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Login',
  },
};
