import { forwardRef } from 'react';
import { Navbar } from '../navbar/navbar';
import { NavbarBrand } from '../navbar/navbar-brand';
import { NavbarLinks } from '../navbar/navbar-links';

export interface NavbarType1Props {
  /**
   * The logo of the navbar
   * @type React.ReactNode
   * @example <Logo width={30} height={30} />
   * @required
   */
  logo: React.ReactNode;

  /**
   * The title of the navbar
   * @type string
   * @example "Hako UI"
   * @required
   */
  title: string;

  /**
   * The links of the navbar
   * @type string[]
   * @example ["Home", "About", "Services", "Portfolio", "Contact"]
   * @required
   */
  links: string[];
}

export const NavbarType1 = forwardRef<HTMLElement, NavbarType1Props>((props, ref) => {
  return (
    <Navbar ref={ref} className="justify-between">
      <NavbarBrand logo={props.logo} title={props.title} />
      <NavbarLinks links={props.links} />
    </Navbar>
  );
});

NavbarType1.displayName = 'NavbarType1';
