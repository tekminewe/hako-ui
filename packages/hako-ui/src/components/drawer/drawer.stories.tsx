import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './drawer';
import { NavbarToggle } from '../navbar';
import { useState } from 'react';

const meta = {
  title: 'Components / Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Render = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavbarToggle onClick={() => setIsOpen((open) => !open)} />
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <div>Content</div>
      </Drawer>
    </>
  );
};

export const Default: Story = {
  render: Render,
};
