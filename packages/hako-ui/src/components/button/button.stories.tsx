import type { Meta, StoryObj } from '@storybook/react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidButton: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 items-start">
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="default">Default</Button>
      <Button variant="primary" loading>
        Primary
      </Button>
    </div>
  ),
};

export const OutlineButton: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 items-start">
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-default">Default</Button>
      <Button variant="outline-primary" loading>
        Primary
      </Button>
    </div>
  ),
};

export const TextButton: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 items-start">
      <Button variant="text-primary">Primary</Button>
      <Button variant="text-danger">Danger</Button>
      <Button variant="text-default">Default</Button>
      <Button variant="text-default" loading>
        Primary
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 items-start">
      <Button variant="default" icon={<FiArrowLeft />}>
        Go back
      </Button>
      <Button variant="primary" iconPosition="right" icon={<FiArrowRight />}>
        Login
      </Button>
      <Button variant="outline-default" icon={<FiArrowLeft />}>
        Go back
      </Button>
      <Button variant="outline-primary" iconPosition="right" icon={<FiArrowRight />}>
        Login
      </Button>
      <Button variant="text-default" icon={<FiArrowLeft />}>
        Go back
      </Button>
      <Button variant="text-primary" iconPosition="right" icon={<FiArrowRight />}>
        Login
      </Button>
    </div>
  ),
};
