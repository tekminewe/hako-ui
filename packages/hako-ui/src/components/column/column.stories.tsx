import type { Meta, StoryObj } from '@storybook/react';

import { Column } from './column';

const meta = {
  title: 'Components / Layouts / Column',
  component: Column,
  tags: ['autodocs'],
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalAligment: Story = {
  render: () => (
    <Column className="space-y-8">
      <Column horizontalAlign="center">
        <div className="bg-success">Item 1</div>
        <div className="bg-danger">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Column>
      <Column horizontalAlign="left">
        <div className="bg-success">Item 1</div>
        <div className="bg-danger">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Column>
      <Column horizontalAlign="right">
        <div className="bg-success">Item 1</div>
        <div className="bg-danger">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Column>
      <Column horizontalAlign="stretch">
        <div className="bg-success">Item 1</div>
        <div className="bg-danger">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Column>
    </Column>
  ),
};
