import type { Meta, StoryObj } from '@storybook/react';
import { FiArrowRight } from 'react-icons/fi';

import { Button } from '../button';

import { Hero } from './hero';
const meta = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingWithImage: Story = {
  args: {
    children: (
      <>
        <div className="grid grid-cols-2 items-center">
          <div>
            <p className="text-hk-xl font-medium">Hi there, I&apos;m</p>
            <p className="text-hk-3xl font-bold">Peter Huntsman</p>
            <p className="text-hk-xl font-medium text-primary my-hk-md">A Professional Freelance Web Developer</p>
            <p className="mb-hk-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <div className="flex items-center space-x-hk-md">
              <Button>Let&apos;s talk!</Button>
              <Button variant="text-default" iconPosition="right" icon={<FiArrowRight />}>
                Portfolio
              </Button>
            </div>
          </div>
          <div>
            <img
              src="./images/people1.webp"
              srcSet="./images/people1.webp 1x, ./images/people1@2x.webp 2x, ./images/people1@3x.webp 3x"
              alt="hero-image"
            />
          </div>
        </div>
      </>
    ),
  },
};
