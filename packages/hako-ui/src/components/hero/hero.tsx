import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export type HeroProps = HTMLAttributes<HTMLElement>;

export const Hero = forwardRef<HTMLElement, HeroProps>(({ className, ...props }, ref) => {
  return <section {...props} ref={ref} className={classNames(className, 'flex container mx-auto')} />;
});

Hero.displayName = 'Hero';
