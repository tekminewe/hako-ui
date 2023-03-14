import { forwardRef, HTMLAttributes } from "react";

export const Navbar = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return <nav {...props} ref={ref} />;
  }
);

Navbar.displayName = "Navbar";
