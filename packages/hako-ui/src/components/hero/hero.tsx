import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export const Hero = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => {
  return <section {...props} ref={ref} className={classNames(className, 'flex container mx-auto h-[800px]')} />;
});

Hero.displayName = 'Hero';
