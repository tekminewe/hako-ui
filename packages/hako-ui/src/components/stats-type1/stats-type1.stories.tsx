import type { Meta, StoryObj } from '@storybook/react';
import { CiUser, CiLight, CiCalendar } from 'react-icons/ci';
import { StatsType1 } from './stats-type1';

const meta = {
  title: 'Components/Stats/StatsType1',
  component: StatsType1,
  tags: ['autodocs'],
} satisfies Meta<typeof StatsType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoIcon: Story = {
  args: {
    stats: [
      {
        title: 'Happy Clients',
        value: '1000+',
      },
      {
        title: 'Active Projects',
        value: '50+',
      },
      {
        title: 'Year of Experiences',
        value: '5+',
      },
    ],
  },
};

export const WithIcon: Story = {
  args: {
    stats: [
      {
        icon: <CiUser size={60} />,
        title: 'Happy Clients',
        value: '1000+',
      },
      {
        icon: <CiLight size={60} />,
        title: 'Active Projects',
        value: '50+',
      },
      {
        icon: <CiCalendar size={60} />,
        title: 'Year of Experiences',
        value: '5+',
      },
    ],
  },
};
