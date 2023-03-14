import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./navbar";
import { NavbarBrand } from "./navbar-brand";
import { ReactComponent as Logo } from "assets/logo.svg";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleMenu: Story = {
  args: {
    children: (
      <>
        <NavbarBrand logo={<Logo width={30} height={30} />} title="Hako UI" />
      </>
    ),
  },
};
