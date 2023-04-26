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

export const NavbarBrand = forwardRef<HTMLDivElement, NavbarBrandProps>(({ className, logo, title, ...props }, ref) => {
  return (
    <div {...props} className={classNames('flex items-center space-x-4 cursor-pointer', className)} ref={ref}>
      {logo}
      {title && <h1 className="text-xl font-bold">{title}</h1>}
    </div>
  );
});

NavbarBrand.displayName = 'NavbarBrand';
