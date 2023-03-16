import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

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

export const NavbarBrand = forwardRef<HTMLDivElement, NavbarBrandProps>(({ className, ...props }, ref) => {
  return (
    <div {...props} className={classNames('flex items-center space-x-sm', className)} ref={ref}>
      {props.logo}
      <h1 className="text-lg font-bold">{props.title}</h1>
    </div>
  );
});

NavbarBrand.displayName = 'NavbarBrand';
