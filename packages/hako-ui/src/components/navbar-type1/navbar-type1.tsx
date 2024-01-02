'use client';

import { MouseEventHandler, forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { Navbar, NavbarProps } from '../navbar/navbar';
import { NavbarBrand } from '../navbar/navbar-brand';
import { NavbarLinks, NavbarLinksProps } from '../navbar/navbar-links';
import { NavbarToggle } from '../navbar/navbar-toggle';
import { Drawer, DrawerProps } from '../drawer';
import classNames from 'classnames';
import { Button } from '../button';
import { NavbarDropdown, NavbarDropdownProps } from '../navbar/navbar-dropdown';

export interface NavbarType1Props extends NavbarProps {
  /**
   * The logo of the navbar
   * @type React.ReactNode
   * @example <Logo width={30} height={30} />
   * @required
   */
  logo?: React.ReactNode;

  /**
   * The title of the navbar
   * @type string
   * @example "Hako UI"
   * @required
   */
  title?: string;

  /**
   * The links of the navbar
   * @type string[]
   * @example ["Home", "About", "Services", "Portfolio", "Contact"]
   * @required
   */
  links?: string[];

  /**
   * The callback function to be called when a link is clicked
   * @type NavbarLinksProps['onLinkClick']
   * @example () => console.log("Link clicked")
   */
  onLinkClick?: NavbarLinksProps['onLinkClick'];

  /**
   * The index of the selected link
   * @type number
   * @example 0
   */
  selectedIndex?: number;

  /**
   * Title of the cta button
   * @type string
   * @example "Get Started"
   */
  cta?: string;

  /**
   * The callback function to be called when the cta button is clicked
   * @type MouseEventHandler<HTMLButtonElement>
   * @example () => console.log("Cta clicked")
   */
  onCtaClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * The profile photo url
   * @type string
   * @example 'https://cdn.fakercloud.com/avatars/calebogden_128.jpg'
   */
  profilePhotoUrl?: string;

  /**
   * The callback function to be called when the profile photo is clicked
   * @type MouseEventHandler<HTMLImageElement>
   * @example () => console.log("Profile photo clicked")
   */
  onProfilePhotoClick?: MouseEventHandler<HTMLImageElement>;

  /**
   * The props of the drawer
   * @type DrawerProps & { position?: 'left' | 'right'}
   * @example { anchor: 'left' }
   * @default undefined
   */
  drawerProps?: Pick<DrawerProps, 'className' | 'onClose'> & {
    /**
     * The position of the drawer
     * @type 'left' | 'right'
     * @example 'left'
     * @default 'right'
     */
    position?: 'left' | 'right';
  };

  /**
   * The props of the dropdown that is shown on mobile screen in the center of the navbar
   * @type NavbarDropdownProps
   */
  mobileDropdownProps?: NavbarDropdownProps;
}

export const NavbarType1 = forwardRef<HTMLElement, NavbarType1Props>(
  (
    {
      containerClassName,
      title,
      links,
      onLinkClick,
      selectedIndex,
      logo,
      cta,
      onCtaClick,
      profilePhotoUrl,
      onProfilePhotoClick,
      drawerProps,
      mobileDropdownProps,
      ...props
    },
    ref,
  ) => {
    const drawerPosition = drawerProps?.position ?? 'right';
    const { className: drawerClassName, ...otherDrawerProps } = drawerProps ?? {};
    const [show, setShow] = useState(false);
    const [privateRef, setPrivateRef] = useState<HTMLElement | null>(null);
    const callbackRef = useCallback((node: HTMLElement) => {
      if (node) {
        setPrivateRef(node);
      }
    }, []);
    useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => privateRef, [privateRef]);

    const handleToggle = () => {
      setShow((show) => !show);
    };

    const handleClose = () => {
      setShow(false);
    };

    const hasBrand = !!title || !!logo;
    const hasContent = cta || !!links?.length || !!profilePhotoUrl;

    return (
      <>
        <Navbar
          ref={callbackRef}
          containerClassName={classNames(containerClassName, 'relative z-0', {
            'justify-between': hasContent && hasBrand,
            'justify-end': !hasBrand && drawerPosition === 'right',
          })}
          {...props}
        >
          {!!links?.length && drawerPosition === 'left' && (
            <NavbarToggle containerClassName="lg:hidden" onClick={handleToggle} />
          )}
          {hasBrand && <NavbarBrand logo={logo} title={title} />}
          {!!mobileDropdownProps?.items?.length && <NavbarDropdown {...mobileDropdownProps} anchorTo={privateRef} />}
          {hasContent && (
            <div className="flex self-end items-center space-x-4">
              {!!links?.length && (
                <NavbarLinks
                  links={links}
                  className="hidden lg:flex"
                  onLinkClick={onLinkClick}
                  selectedIndex={selectedIndex}
                />
              )}
              {!!profilePhotoUrl && (
                <img
                  src={profilePhotoUrl}
                  alt="Profile"
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={onProfilePhotoClick}
                />
              )}
              {cta && <Button onClick={onCtaClick}>{cta}</Button>}
              {!!links?.length && drawerPosition === 'right' && (
                <NavbarToggle containerClassName="lg:hidden" onClick={handleToggle} />
              )}
            </div>
          )}
        </Navbar>
        {!!links?.length && (
          <Drawer
            anchor={drawerPosition}
            className={classNames('lg:hidden', drawerClassName)}
            open={show}
            onClose={handleClose}
            {...otherDrawerProps}
          >
            <div className="flex justify-end">
              <div className="p-4 cursor-pointer" onClick={handleClose}>
                <TfiClose />
              </div>
            </div>
            <NavbarLinks links={links} direction="vertical" />
          </Drawer>
        )}
      </>
    );
  },
);

NavbarType1.displayName = 'NavbarType1';
