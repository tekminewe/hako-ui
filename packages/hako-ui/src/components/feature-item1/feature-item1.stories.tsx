import type { Meta, StoryObj } from '@storybook/react';
import { FiBluetooth } from 'react-icons/fi';
import { Row } from '../row';

import { FeatureItem1 } from './feature-item1';

const meta = {
  title: 'Components / Features / Items / FeatureItem2',
  component: FeatureItem1,
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureItem1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    icon: <FiBluetooth size={24} />,
    title: 'Feature 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  render: (props) => {
    return (
      <Row>
        <FeatureItem1 {...props} />
      </Row>
    );
  },
};

export const Center: Story = {
  args: {
    icon: <FiBluetooth size={24} />,
    title: 'Submit a ticket',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    align: 'center',
    border: false,
  },
  render: (props) => {
    return (
      <Row>
        <FeatureItem1 {...props} className="w-1/2" />
      </Row>
    );
  },
};
