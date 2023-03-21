import type { Meta, StoryObj } from '@storybook/react';

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
        title: 'Feature 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Feature 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
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
        title: 'Feature 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        learnMore: {
          title: 'Learn more about feature 1',
          link: 'https://www.google.com',
        },
      },
      {
        title: 'Feature 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        learnMore: {
          title: 'Learn more about feature 2',
          link: 'https://www.google.com',
        },
      },
      {
        title: 'Feature 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        learnMore: {
          title: 'Learn more about feature 3',
          link: 'https://www.google.com',
        },
      },
    ],
  },
};
