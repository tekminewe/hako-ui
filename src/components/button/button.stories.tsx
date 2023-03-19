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
    <div className="flex flex-col space-y-hk-md items-start">
      <Button variant="primary">Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="default">Default</Button>
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="flex flex-col space-y-hk-md items-start">
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-default">Default</Button>
    </div>
  ),
};
