import { forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface NavbarLinksProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * The links
   * @default []
   * @type string[]
   * @example ["Home", "About", "Contact"]
   */
  links?: string[];

  /**
   * The callback function to be called when a link is clicked
   * @default undefined
   * @type React.MouseEventHandler<HTMLLIElement>
   * @example () => console.log("Link clicked")
   */
  onLinkClick?: React.MouseEventHandler<HTMLLIElement>;

  /**
   * The class name to be applied to each link
   * @default undefined
   * @type string
   * @example "link"
   */
  linkClassName?: string;

  /**
   * The index of the selected link
   * @default undefined
   * @type number
   * @example 0
   */
  selectedIndex?: number;

  /**
   * The direction of the links
   * @default "horizontal"
   * @type "horizontal" | "vertical"
   * @example "vertical"
   */
  direction?: 'horizontal' | 'vertical';
}

export const NavbarLinks = forwardRef<HTMLUListElement, NavbarLinksProps>(
  ({ links, onLinkClick, selectedIndex, linkClassName, className, direction = 'horizontal', ...props }, ref) => {
    return (
      <ul
        {...props}
        className={classNames('flex items-center', className, {
          'flex-col space-y-6': direction === 'vertical',
          'space-x-6': direction === 'horizontal',
        })}
        ref={ref}
      >
        {links?.map((link, index) => (
          <li
            className={classNames(linkClassName, 'cursor-pointer font-medium', {
              'text-primary': selectedIndex === index,
            })}
            key={link}
            onClick={onLinkClick}
          >
            {link}
          </li>
        ))}
      </ul>
    );
  },
);

NavbarLinks.displayName = 'NavbarLinks';
