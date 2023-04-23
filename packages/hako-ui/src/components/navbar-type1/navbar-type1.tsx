import { forwardRef, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { Navbar } from '../navbar/navbar';
import { NavbarBrand } from '../navbar/navbar-brand';
import { NavbarLinks, NavbarLinksProps } from '../navbar/navbar-links';
import { NavbarToggle } from '../navbar/navbar-toggle';
import { Drawer } from '../drawer';

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

  /**
   * The callback function to be called when a link is clicked
   * @type NavbarLinksProps['onLinkClick']
   * @example () => console.log("Link clicked")
   */
  onLinkClick?: NavbarLinksProps['onLinkClick'];

  /**
   * The index of the selected link
   * @default undefined
   * @type number
   * @example 0
   */
  selectedIndex?: number;
}

export const NavbarType1 = forwardRef<HTMLElement, NavbarType1Props>((props, ref) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((show) => !show);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Navbar ref={ref} className="justify-between">
        <NavbarBrand logo={props.logo} title={props.title} />
        <NavbarLinks
          links={props.links}
          className="hidden lg:flex"
          onLinkClick={props.onLinkClick}
          selectedIndex={props.selectedIndex}
        />
        <NavbarToggle containerClassName="lg:hidden" onClick={handleToggle} />
      </Navbar>
      <Drawer anchor="right" className="lg:hidden p-4" open={show} onClose={handleClose}>
        <div className="flex justify-end">
          <div className="p-4 cursor-pointer" onClick={handleClose}>
            <TfiClose />
          </div>
        </div>
        <NavbarLinks links={props.links} direction="vertical" />
      </Drawer>
    </>
  );
});

NavbarType1.displayName = 'NavbarType1';
