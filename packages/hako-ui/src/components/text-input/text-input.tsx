import classNames from 'classnames';
import { forwardRef } from 'react';

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * The label for the input.
   * @type {string}
   * @default ''
   * @example 'Email address'
   */
  label?: string;

  /**
   * The hint for the input. This will be displayed below the input.
   * Can be used to provide additional information about the input such as error messages.
   *
   * @type {string}
   * @default ''
   * @example 'We will never share your email address with anyone else.'
   */
  hint?: string;

  /**
   * The status of the input. This will be used to determine the color of the input border.
   * Can be used to indicate the input is in an error state.
   * @type {string}
   * @default 'default'
   * @example 'error'
   */
  status?: 'error' | 'success' | 'default';
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, label = '', hint = '', status = 'default', ...props }, ref) => {
    return (
      <div className="space-y-1 text-sm mb-1">
        {label && (
          <label htmlFor={props.id}>
            {label} {props.required && <span className="text-danger">*</span>}
          </label>
        )}
        <input
          ref={ref}
          {...props}
          className={classNames(
            className,
            'rounded-md p-2 w-full',
            'border-0 ring-1 ring-inset',
            {
              'ring-danger': status === 'error',
              'ring-success': status === 'success',
              'ring-background-darker': status === 'default',
            },
            'bg-background-dark text-on-background-dark100',
            'placeholder:text-on-background-dark50',
            'focus:ring-2 focus:ring-primary focus:outline-none',
          )}
        />
        <div
          className={classNames('h-[17px]', {
            'text-danger': status === 'error',
            'text-success': status === 'success',
          })}
        >
          {hint}
        </div>
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
