import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        'bg-background text-on-background100 shadow border border-background-dark rounded-lg overflow-hidden p-4',
        className,
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';
