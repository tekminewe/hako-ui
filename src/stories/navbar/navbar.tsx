import { forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";

export const Navbar = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        {...props}
        ref={ref}
        className={classNames(className, "flex items-center justify-between")}
      />
    );
  }
);

Navbar.displayName = "Navbar";
