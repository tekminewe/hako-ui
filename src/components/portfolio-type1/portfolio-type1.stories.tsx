import type { Meta, StoryObj } from '@storybook/react';

import { PortfolioType1 } from './portfolio-type1';

const meta = {
  title: 'Components/Portfolio/PortfolioType1',
  component: PortfolioType1,
  tags: ['autodocs'],
} satisfies Meta<typeof PortfolioType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: 'Our Clients',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    projects: [
      {
        image: '/images/project.png',
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        image: '/images/project.png',
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        image: '/images/project.png',
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
};

export const WithLabel: Story = {
  args: {
    title: 'Our Clients',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    projects: [
      {
        label: 'Logo Design',
        image: '/images/project.png',
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        label: 'Web Development',
        labelVariant: 'danger',
        image: '/images/project.png',
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        label: 'SEO',
        labelVariant: 'raw',
        labelClassName: 'text-[#ff00ff] border-[#ff00ff]',
        image: '/images/project.png',
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        label: 'SEO',
        labelVariant: 'raw',
        labelClassName: 'text-[#ff00ff] border-[#ff00ff]',
        image: '/images/project.png',
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        label: 'SEO',
        labelVariant: 'raw',
        labelClassName: 'text-[#ff00ff] border-[#ff00ff]',
        image: '/images/project.png',
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        label: 'SEO',
        labelVariant: 'raw',
        labelClassName: 'text-[#ff00ff] border-[#ff00ff]',
        image: '/images/project.png',
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
};
