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
        <div className="bg-success-bg">Item 1</div>
        <div className="bg-danger100">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Row>
      <Row verticalAlign="top">
        <div className="bg-success-bg">Item 1</div>
        <div className="bg-danger100">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Row>
      <Row verticalAlign="bottom">
        <div className="bg-success-bg">Item 1</div>
        <div className="bg-danger100">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Row>
      <Row verticalAlign="stretch">
        <div className="bg-success-bg">Item 1</div>
        <div className="bg-danger100">Item 2</div>
        <div className="bg-info">Item 3</div>
      </Row>
    </Row>
  ),
};

export const LayoutColumn: Story = {
  render: () => (
    <Row className="space-x-8">
      <Row className="border hk-border justify-center rounded p-2" xs={3}>
        xs=3
      </Row>
      <Row className="border hk-border justify-center text-center rounded p-2" xs={5}>
        xs=5
      </Row>
      <Row className="border hk-border justify-center text-center rounded p-2" xs={4}>
        xs=4
      </Row>
    </Row>
  ),
};
