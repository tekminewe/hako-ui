import classNames from 'classnames';
import { forwardRef } from 'react';

export const TextInput = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={classNames(
          className,
          'rounded-md p-2 w-full',
          'border-0 ring-1 ring-inset ring-background-darker',
          'bg-background-dark text-on-background-dark100',
          'placeholder:text-on-background-dark50',
          'focus:ring-2 focus:ring-primary focus:outline-none',
        )}
      />
    );
  },
);

TextInput.displayName = 'TextInput';
