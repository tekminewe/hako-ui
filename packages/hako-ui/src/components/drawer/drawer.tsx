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
}

const variants = {
  open: ({ width, anchor }: { width: number; anchor: DrawerAnchor }) => ({
    x: anchor === 'left' ? 0 : `${window.innerWidth - width}px`,
  }),
  close: ({ width, anchor }: { width: number; anchor: DrawerAnchor }) => ({
    x: anchor === 'left' ? `-${width}px` : `${window.innerWidth}px`,
  }),
};

export const Drawer = forwardRef<HTMLElement, DrawerProps>(
  ({ className, open, width = 370, onClose, anchor = 'right', ...props }, ref) => {
    return (
      <>
        <motion.section
          {...props}
          ref={ref}
          animate={open ? 'open' : 'close'}
          variants={variants}
          custom={{
            width,
            anchor,
          }}
          initial={false}
          style={{
            width: `${width}px`,
          }}
          className={classNames(className, 'fixed top-0 bottom-0 bg-background z-50 shadow-lg')}
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
