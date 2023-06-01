'use client';

import classNames from 'classnames';
import { HTMLMotionProps, motion } from 'framer-motion';
import { forwardRef } from 'react';

export type DrawerAnchor = 'left' | 'right';
export interface DrawerProps extends HTMLMotionProps<'nav'> {
  /**
   * If the drawer is open
   * @default false
   * @type boolean
   * @example true
   */
  open?: boolean;

  /**
   * The width of the drawer
   * @default 370
   * @type number
   * @example 370
   */
  width?: number;

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

const variants = {
  open: ({ anchor }: { width: number; anchor: DrawerAnchor }) => ({
    x: anchor === 'left' ? 0 : 0,
  }),
  close: ({ width, anchor }: { width: number; anchor: DrawerAnchor }) => ({
    x: anchor === 'left' ? `-${width}px` : `${width}px`,
  }),
};

export const Drawer = forwardRef<HTMLElement, DrawerProps>(
  ({ className, open, width = 370, onClose, anchor = 'left', behavior = 'always-hidden', ...props }, ref) => {
    return (
      <>
        <motion.section
          {...props}
          ref={ref}
          animate={open ? 'open' : 'close'}
          variants={behavior !== 'always-show' ? variants : undefined}
          custom={{
            width,
            anchor,
          }}
          initial={false}
          style={{
            width: `${width}px`,
          }}
          className={classNames(className, 'min-h-screen', {
            'left-0': anchor === 'left',
            'right-0': anchor === 'right',
            'fixed top-0 bottom-0 z-50 shadow-lg': behavior === 'always-hidden',
          })}
        />
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            className="bg-overlay fixed top-0 left-0 right-0 bottom-0 z-40"
          />
        )}
      </>
    );
  },
);

Drawer.displayName = 'Drawer';
