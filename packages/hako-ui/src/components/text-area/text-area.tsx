import classNames from 'classnames';
import { forwardRef } from 'react';

export interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  /**
   * The label for the textarea.
   * @type {string}
   * @default ''
   * @example 'Your message'
   */
  label?: string;

  /**
   * The hint for the textarea. This will be displayed below the textarea.
   * Can be used to provide additional information about the textarea such as error messages.
   *
   * @type {string}
   * @default ''
   * @example 'Maximum 500 characters'
   */
  hint?: string;

  /**
   * The status of the textarea. This will be used to determine the color of the textarea border.
   * Can be used to indicate the textarea is in an error state.
   * @type {string}
   * @default 'default'
   * @example 'error'
   */
  status?: 'error' | 'success' | 'default';
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label = '', hint = '', status = 'default', rows = 5, ...props }, ref) => {
    return (
      <span className="space-y-1 text-sm">
        {label && <label htmlFor={props.id}>{label}</label>}
        <textarea
          ref={ref}
          {...props}
          rows={rows}
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
        {hint && (
          <span
            className={classNames({
              'text-danger': status === 'error',
              'text-success': status === 'success',
            })}
          >
            {hint}
          </span>
        )}
      </span>
    );
  },
);

TextArea.displayName = 'TextArea';
