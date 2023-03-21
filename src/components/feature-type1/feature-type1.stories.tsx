import type { Meta, StoryObj } from '@storybook/react';
import { FiArrowRight, FiBluetooth } from 'react-icons/fi';

import { FeatureType1 } from './feature-type1';

const meta = {
  title: 'Components/Features/FeatureType1',
  component: FeatureType1,
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: 'We Deliver Values',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
      {
        icon: (
          <div className="flex justify-start">
            <span className="bg-primary rounded-lg flex self-start p-2">
              <FiBluetooth size={24} className="text-background" />
            </span>
          </div>
        ),
        title: 'Feature 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        icon: (
          <div className="flex justify-start">
            <span className="bg-primary rounded-lg flex self-start p-2">
              <FiBluetooth size={24} className="text-background" />
            </span>
          </div>
        ),
        title: 'Feature 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        icon: (
          <div className="flex justify-start">
            <span className="bg-primary rounded-lg flex self-start p-2">
              <FiBluetooth size={24} className="text-background" />
            </span>
          </div>
        ),
        title: 'Feature 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
};

export const SimpleWithLearnMore: Story = {
  args: {
    title: 'We Deliver Values',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
      {
        icon: (
          <div className="flex justify-start">
            <span className="bg-primary rounded-lg flex self-start p-2">
              <FiBluetooth size={24} className="text-background" />
            </span>
          </div>
        ),
        title: 'Feature 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        learnMore: {
          title: 'Learn more about feature 1',
          link: 'https://www.google.com',
        },
      },
      {
        icon: (
          <div className="flex justify-start">
            <span className="bg-primary rounded-lg flex self-start p-2">
              <FiBluetooth size={24} className="text-background" />
            </span>
          </div>
        ),
        title: 'Feature 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        learnMore: {
          title: 'Learn more about feature 2',
          link: 'https://www.google.com',
        },
      },
      {
        icon: (
          <div className="flex justify-start">
            <span className="bg-primary rounded-lg flex self-start p-2">
              <FiBluetooth size={24} className="text-background" />
            </span>
          </div>
        ),
        title: 'Feature 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        learnMore: {
          title: (
            <>
              <span>Learn more about feature 3</span>
              <FiArrowRight />
            </>
          ),
          link: 'https://www.google.com',
        },
      },
    ],
  },
};
