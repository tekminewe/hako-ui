import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('bg-neutral5 shadow border hk-border hk-rounded overflow-hidden p-4', className)}
      {...props}
    />
  );
});

Card.displayName = 'Card';
