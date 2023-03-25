import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  render: () => {
    return (
      <div className="space-y-4 flex flex-col items-start">
        <Badge>Badge</Badge>
        <Badge variant="success">Badge</Badge>
        <Badge variant="danger">Badge</Badge>
        <Badge variant="info">Badge</Badge>
        <Badge variant="warning">Badge</Badge>
        <Badge variant="default">Badge</Badge>
      </div>
    );
  },
};

export const Outline: Story = {
  render: () => {
    return (
      <div className="space-y-4 flex flex-col items-start">
        <Badge variant="outline-primary">Badge</Badge>
        <Badge variant="outline-success">Badge</Badge>
        <Badge variant="outline-danger">Badge</Badge>
        <Badge variant="outline-info">Badge</Badge>
        <Badge variant="outline-warning">Badge</Badge>
        <Badge variant="outline-default">Badge</Badge>
      </div>
    );
  },
};
