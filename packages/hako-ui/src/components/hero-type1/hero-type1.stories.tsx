import type { Meta, StoryObj } from '@storybook/react';

import { HeroType1 } from './hero-type1';

const meta = {
  title: 'Components / Hero / HeroType1',
  component: HeroType1,
  tags: ['autodocs'],
} satisfies Meta<typeof HeroType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutSubtitle: Story = {
  args: {
    title: 'Build your web application faster with Hako UI',
    description:
      'Build your web application with the best React UI library. Hako UI is a React UI library that contains a set of reusable components that you can use to build your web application.',
    ctaText: 'Get Started',
  },
};

export const WithoutCTA2: Story = {
  args: {
    ...WithoutSubtitle.args,
    subtitle: 'A Professional Freelance Web Developer',
  },
};

export const WithoutImage: Story = {
  args: {
    ...WithoutCTA2.args,
    cta2Text: 'Learn more →',
  },
};

export const Full: Story = {
  args: {
    ...WithoutImage.args,
    image: {
      src: './images/people1.webp',
      alt: 'hero-image',
    },
  },
};
