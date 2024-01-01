import type { Meta, StoryObj } from '@storybook/react';
import { allModes } from '../../../.storybook/modes';

import { NavbarType1 } from './navbar-type1';
import { ReactComponent as Logo } from 'assets/logo.svg';

const meta = {
  title: 'Components / Navbar / NavbarType1',
  component: NavbarType1,
  tags: ['autodocs'],
} satisfies Meta<typeof NavbarType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    logo: <Logo width={30} height={30} />,
    title: 'Hako UI',
    links: ['Home', 'About', 'Services', 'Portfolio', 'Contact'],
    cta: 'Sign up',
    profilePhotoUrl: '/images/user.png',
    drawerProps: {
      className: 'bg-white',
    },
  },
  parameters: {
    chromatics: {
      modes: {
        mobile: allModes['mobile'],
        tablet: allModes['tablet'],
        desktop: allModes['desktop'],
      },
    },
  },
};

export const TitleWithCta: Story = {
  args: {
    title: 'Hako UI',
    cta: 'Sign up',
  },
};

export const LogoOnly: Story = {
  args: {
    logo: <Logo width={30} height={30} />,
  },
};

export const ProfileOnly: Story = {
  args: {
    profilePhotoUrl: '/images/user.png',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Hako UI',
  },
};

export const LinkOnly: Story = {
  args: {
    links: ['Home', 'About', 'Services', 'Portfolio', 'Contact'],
  },
};

export const CtaOnly: Story = {
  args: {
    cta: 'Sign up',
  },
};

export const LinkOnlyToggleLeft: Story = {
  args: {
    ...LinkOnly.args,
    drawerProps: {
      position: 'left',
      className: 'bg-primary text-white',
    },
  },
};

export const MobileDropdown: Story = {
  args: {
    drawerProps: {
      position: 'left',
      className: 'bg-primary text-white',
    },
    links: ['Home', 'About', 'Services', 'Portfolio', 'Contact'],
    mobileDropdownProps: {
      selectedItemId: 'my-tickets',
      items: [
        {
          id: 'my-tickets',
          label: 'My tickets',
        },
        {
          id: 'unassigned-tickets',
          label: 'Unassigned tickets',
        },
        {
          id: 'assigned-tickets',
          label: 'Assigned tickets',
        },
      ],
    },
  },
};
