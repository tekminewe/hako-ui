import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export const Hero = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => {
  return (
    <section
      {...props}
      ref={ref}
      className={classNames(className, 'flex items-center justify-around container mx-auto h-[800px]')}
    />
  );
});

Hero.displayName = 'Hero';
