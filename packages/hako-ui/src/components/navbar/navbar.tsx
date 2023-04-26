import { forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /**
   * The class name of the container inside the nav
   * @default undefined
   * @type string
   * @example "bg-white"
   */
  containerClassName?: string;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ className, containerClassName, children, ...props }, ref) => {
    return (
      <nav {...props} ref={ref} className={classNames(className, 'flex items-center h-[70px]')}>
        <div className={classNames(containerClassName, 'container mx-auto')}>{children}</div>
      </nav>
    );
  },
);

Navbar.displayName = 'Navbar';
