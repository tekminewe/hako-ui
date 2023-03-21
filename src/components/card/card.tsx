import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        'bg-background text-on-background shadow border border-background-dark rounded-lg overflow-hidden',
        props.className,
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';
