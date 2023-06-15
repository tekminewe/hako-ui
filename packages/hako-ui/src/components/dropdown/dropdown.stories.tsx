import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../button';

import { Dropdown, DropdownProps } from './dropdown';

const meta = {
  title: 'Components / Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const Render = (props: Omit<DropdownProps, 'ref'>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    setAnchorEl((anchor) => {
      return anchor?.id === target.id ? null : target;
    });
  };

  return (
    <div>
      <div className="space-x-8">
        <Button id="bottom-left" onClick={handleClick}>
          Bottom Left
        </Button>
        <Button id="bottom-right" onClick={handleClick}>
          Bottom Right
        </Button>
        <Button id="top-left" onClick={handleClick}>
          Top Left
        </Button>
        <Button id="top-right" onClick={handleClick}>
          Top Right
        </Button>
      </div>
      <Dropdown
        anchorTo={anchorEl}
        open={!!anchorEl}
        anchorPosition={anchorEl?.id as DropdownProps['anchorPosition']}
        onClose={() => setAnchorEl(null)}
        {...props}
      />
    </div>
  );
};

export const WithAnchor: Story = {
  render: Render,
  args: {
    sections: [
      {
        title: 'Section 1',
        items: [
          {
            id: 1,
            label: 'Item 1',
          },
          {
            id: 2,
            label: 'Item 2',
          },
        ],
      },
    ],
  },
};

export const SingleSection: Story = {
  args: {
    open: true,
    sections: [
      {
        title: 'Section 1',
        items: [
          {
            id: 1,
            label: 'Item 1',
          },
          {
            id: 2,
            label: 'Item 2',
          },
        ],
      },
    ],
  },
};

export const MultipleSection: Story = {
  args: {
    open: true,
    sections: [
      {
        title: 'Section 1',
        items: [
          {
            id: 1,
            label: 'Item 1',
          },
          {
            id: 2,
            label: 'Item 2',
          },
        ],
      },
      {
        title: 'Section 2',
        items: [
          {
            id: 1,
            label: 'Item 1',
          },
          {
            id: 2,
            label: 'Item 2',
          },
        ],
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    open: true,
    loading: true,
    sections: [
      {
        title: 'Section 1',
        items: [
          {
            id: 1,
            label: 'Item 1',
          },
          {
            id: 2,
            label: 'Item 2',
          },
        ],
      },
    ],
  },
};
