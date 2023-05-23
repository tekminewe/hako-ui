import type { Meta, StoryObj } from '@storybook/react';

import { Row } from './row';

const meta = {
  title: 'Components / Layouts / Row',
  component: Row,
  tags: ['autodocs'],
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalAlignment: Story = {
  render: () => (
    <Row className="space-x-8 h-[100px]">
      <Row verticalAlign="center">
        <div className="bg-success">Item 1</div>
        <div className="bg-danger100">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Row>
      <Row verticalAlign="top">
        <div className="bg-success">Item 1</div>
        <div className="bg-danger100">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Row>
      <Row verticalAlign="bottom">
        <div className="bg-success">Item 1</div>
        <div className="bg-danger100">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Row>
      <Row verticalAlign="stretch">
        <div className="bg-success">Item 1</div>
        <div className="bg-danger100">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Row>
    </Row>
  ),
};
