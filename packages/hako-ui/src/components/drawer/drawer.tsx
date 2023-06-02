'use client';

import classNames from 'classnames';
import { forwardRef, HTMLAttributes, useMemo, useState } from 'react';

export type DrawerAnchor = 'left' | 'right';
export interface DrawerProps extends HTMLAttributes<HTMLElement> {
  /**
   * If the drawer is open
   * @default false
   * @type boolean
   * @example true
   */
  open?: boolean;

  /**
   * The width of the drawer
   * @default 250
   * @type number
   * @example 370
   */
  width?: number | string;

  /**
   * The function to be called when the overlay is clicked
   *
   * @default undefined
   * @returns void
   */
  onClose?: () => void;

  /**
   * Where the drawer is anchored to the screen
   * @default "right"
   * @type DrawerAnchor
   */
  anchor?: 'left' | 'right';

  /**
   * The behavior of the drawer
   * If set to "always-hidden", the drawer will be hidden on all screen sizes
   * If set to "always-show", the drawer will be shown on all screen sizes
   *
   * @default "responsive"
   * @type "always-hidden" | "always-show"
   * @example "always-hidden"
   */
  behavior?: 'always-hidden' | 'always-show';
}

export const Drawer = forwardRef<HTMLElement, DrawerProps>(
  ({ className, open, width = 250, onClose, anchor = 'left', behavior = 'always-hidden', ...props }, ref) => {
    const displayWidth: string = useMemo(() => {
      if (open) {
        if (isNaN(+width)) {
          return `${width}`;
        } else {
          return `${width}px`;
        }
      }

      return '0px';
    }, [open]);

    return (
      <>
        <section
          {...props}
          ref={ref}
          style={{
            width: `${displayWidth}`,
          }}
          className={classNames(
            className,
            'min-h-screen transition-all duration-500 whitespace-nowrap overflow-hidden',
            {
              'left-0': anchor === 'left',
              'right-0': anchor === 'right',
              'fixed top-0 bottom-0 z-50 shadow-lg': behavior === 'always-hidden',
            },
          )}
        />
        {open && <div onClick={onClose} className="bg-overlay fixed top-0 left-0 right-0 bottom-0 z-40" />}
      </>
    );
  },
);

Drawer.displayName = 'Drawer';
