import { forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";

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
}

export const NavbarLinks = forwardRef<HTMLUListElement, NavbarLinksProps>(
  (
    { links, onLinkClick, selectedIndex, linkClassName, className, ...props },
    ref
  ) => {
    return (
      <ul
        {...props}
        className={classNames("flex items-center space-x-xl", className)}
        ref={ref}
      >
        {links?.map((link, index) => (
          <li
            className={classNames(
              linkClassName,
              "cursor-pointer typo-base font-medium",
              {
                "text-primary": selectedIndex === index,
              }
            )}
            key={link}
            onClick={onLinkClick}
          >
            {link}
          </li>
        ))}
      </ul>
    );
  }
);

NavbarLinks.displayName = "NavbarLinks";
