import type { Meta, StoryObj } from '@storybook/react';

import { TestimonialType1 } from './testimonial-type1';

const meta = {
  title: 'Components/Testimonials/TestimonialType1',
  component: TestimonialType1,
  tags: ['autodocs'],
} satisfies Meta<typeof TestimonialType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: 'See Why Our Customers Love Us',
    description:
      'At Hako UI, we are committed to providing the best possible experience for our customers. Here are some of the things they have to say about us.',
    testimonials: [
      {
        avatarUrl: '/images/avatar.png',
        name: 'Lisa Cooper',
        designation: 'Product Director at Marketing Ltd',
        message:
          'Hako UI is a great product. I have been using it for a while now and I am very happy with the results. It is very easy to use and the support is great. I highly recommend it!',
      },
    ],
  },
};

export const WithCarousel: Story = {
  args: {
    title: 'See Why Our Customers Love Us',
    description:
      'At Hako UI, we are committed to providing the best possible experience for our customers. Here are some of the things they have to say about us.',
    testimonials: [
      {
        avatarUrl: '/images/avatar.png',
        name: 'Lisa Cooper',
        designation: 'Product Director at Marketing Ltd',
        message:
          'Hako UI is a great product. I have been using it for a while now and I am very happy with the results. It is very easy to use and the support is great. I highly recommend it!',
      },
      {
        avatarUrl: '/images/avatar.png',
        name: 'Lisa Cooper',
        designation: 'Product Director at Marketing Ltd',
        message:
          'Hako UI is a great product. I have been using it for a while now and I am very happy with the results. It is very easy to use and the support is great. I highly recommend it!',
      },
      {
        avatarUrl: '/images/avatar.png',
        name: 'Lisa Cooper',
        designation: 'Product Director at Marketing Ltd',
        message:
          'Hako UI is a great product. I have been using it for a while now and I am very happy with the results. It is very easy to use and the support is great. I highly recommend it!',
      },
    ],
  },
};
