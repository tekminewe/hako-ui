import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './card';

const meta = {
  title: 'Components / Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    children: (
      <>
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-2">Card Title</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </>
    ),
  },
};
