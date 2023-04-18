import classNames from 'classnames';
import { SVGAttributes, forwardRef } from 'react';
import { CiMenuBurger } from 'react-icons/ci';

export interface NavbarToggleProps extends SVGAttributes<SVGElement> {
  /**
   * The class name of the container
   * @default undefined
   * @type string
   * @example "container"
   */
  containerClassName?: string;
}

export const NavbarToggle = forwardRef<HTMLDivElement, NavbarToggleProps>((props, ref) => {
  return (
    <div ref={ref} className={classNames('cursor-pointer', props.containerClassName)}>
      <CiMenuBurger {...props} />
    </div>
  );
});

NavbarToggle.displayName = 'NavbarToggle';
