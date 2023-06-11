'use client';

import classNames from 'classnames';
import { FocusEventHandler, forwardRef, useState } from 'react';

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

  /**
   * The adornment for the input. This will be displayed on the right side of the input.
   * Can be used to display a button or icon.
   * @type {React.ReactNode}
   * @default undefined
   * @example <Button>Submit</Button>
   */
  andorment?: React.ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, label = '', hint = '', status = 'default', andorment, onFocus, onBlur, ...props }, ref) => {
    const [focus, isFocus] = useState(false);

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      onFocus?.(e);
      isFocus(true);
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      onBlur?.(e);
      isFocus(false);
    };

    return (
      <div className="space-y-1 text-sm mb-1">
        {label && (
          <label htmlFor={props.id}>
            {label} {props.required && <span className="text-danger100">*</span>}
          </label>
        )}
        <div
          className={classNames('bg-neutral5 hk-rounded border overflow-hidden', {
            'border-danger100': !focus && status === 'error',
            'border-success': !focus && status === 'success',
            'hk-border': !focus && status === 'default',
            'shadow-[inset_0px_0px_0px_2px_var(--hk-primary)]': focus,
          })}
        >
          <input
            ref={ref}
            {...props}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={classNames(
              className,
              'bg-transparent p-2 w-full placeholder:text-neutral40 focus:outline-none border-0',
            )}
          />
          {andorment && <span>{andorment}</span>}
        </div>
        <div
          className={classNames('min-h-[20px]', {
            'text-danger100': status === 'error',
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
