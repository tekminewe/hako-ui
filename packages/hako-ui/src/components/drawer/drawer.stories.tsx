import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './drawer';
import { useState } from 'react';
import { Button } from '../button';

const meta = {
  title: 'Components / Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Render = () => {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="flex space-x-4">
        <Button
          variant="text-primary"
          onClick={() => {
            setOpen(1);
          }}
        >
          Left
        </Button>
        <Button
          variant="text-primary"
          onClick={() => {
            setOpen(2);
          }}
        >
          Right
        </Button>
      </div>
      <Drawer className="bg-white" open={open === 1} onClose={() => setOpen(0)} behavior="always-hidden">
        <div>Left Drawer</div>
      </Drawer>
      <Drawer className="bg-white" open={open === 2} onClose={() => setOpen(0)} anchor="right" behavior="always-hidden">
        <div>Right Drawer</div>
      </Drawer>
    </>
  );
};

export const AlwaysHidden: Story = {
  render: Render,
};

export const AlwaysShow: Story = {
  args: {
    behavior: 'always-show',
    children: 'Drawer',
    className: 'border-r',
  },
};
