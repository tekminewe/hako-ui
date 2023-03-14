import { forwardRef, HTMLAttributes } from "react";

export const NavbarLinks = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return <div {...props} ref={ref} />;
});

NavbarLinks.displayName = "NavbarLinks";
