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
        <div className="flex flex-1 items-center justify-center">
          <div className="w-2/3">
            <p className="text-2xl font-medium">Hi there, I&apos;m</p>
            <p className="text-5xl font-bold">Peter Huntsman</p>
            <p className="text-2xl font-medium text-primary my-4">A Professional Freelance Web Developer</p>
            <p className="mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <div className="flex items-center space-x-4">
              <Button>Let&apos;s talk!</Button>
              <Button variant="text-default" iconPosition="right" icon={<FiArrowRight />}>
                Portfolio
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <img
            src="./images/people1.webp"
            srcSet="./images/people1.webp 1x, ./images/people1@2x.webp 2x, ./images/people1@3x.webp 3x"
            alt="hero-image"
          />
        </div>
      </>
    ),
  },
};
