import classNames from 'classnames';
import { HTMLMotionProps, motion } from 'framer-motion';
import { forwardRef } from 'react';

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
}

const variants = {
  open: {
    x: 0,
  },
  close: ({ width }: { width: number }) => ({
    x: `-${width}px`,
  }),
};

export const Drawer = forwardRef<HTMLElement, DrawerProps>(({ className, open, width = 370, ...props }, ref) => {
  return (
    <div>
      <motion.nav
        {...props}
        ref={ref}
        animate={open ? 'open' : 'close'}
        variants={variants}
        custom={{
          width,
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
          className="bg-overlay fixed top-0 left-0 right-0 bottom-0 z-40"
        />
      )}
    </div>
  );
});

Drawer.displayName = 'Drawer';
