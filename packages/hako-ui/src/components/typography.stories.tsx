import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Typography',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <div>
      <p className="hk-typo-h1">Heading 1</p>
      <p className="hk-typo-h2">Heading 2</p>
      <p className="hk-typo-h3">Heading 3</p>
      <p className="hk-typo-body">Body</p>
      <p className="hk-typo-small">Small</p>
    </div>
  ),
};
