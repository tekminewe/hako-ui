import classNames from 'classnames';
import { forwardRef } from 'react';

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * The label for the input.
   * @default ''
   * @example 'Email address'
   * @required
   */
  label?: string;
}

export const TextInput = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
  ({ className, label = '', ...props }, ref) => {
    return (
      <span className="space-y-2 text-sm">
        {label && <label htmlFor={props.id}>{label}</label>}
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
      </span>
    );
  },
);

TextInput.displayName = 'TextInput';
