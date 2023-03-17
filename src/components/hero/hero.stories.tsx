import type { Meta, StoryObj } from '@storybook/react';

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
            <p className="text-xl font-medium">Hi there, I&apos;m</p>
            <p className="text-3xl font-bold">Peter Huntsman</p>
            <p className="text-xl font-medium text-primary my-md">A Professional Freelance Web Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
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
