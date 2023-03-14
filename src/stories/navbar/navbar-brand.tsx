import { forwardRef, HTMLAttributes, ReactNode } from "react";

export interface NavbarBrandProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The brand's name
   * @default ""
   * @type string
   * @example "Hako UI"
   */
  title?: string;

  /**
   * The brand's logo
   * @default undefined
   * @type ReactNode
   * @example "<LogoSVG />"
   */
  logo?: ReactNode;
}

export const NavbarBrand = forwardRef<HTMLDivElement, NavbarBrandProps>(
  (props, ref) => {
    return (
      <div {...props} ref={ref}>
        {props.logo}
        <h1>{props.title}</h1>
      </div>
    );
  }
);

NavbarBrand.displayName = "NavbarBrand";
