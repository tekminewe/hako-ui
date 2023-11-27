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
      <div className="text-sm mb-1">
        {label && (
          <label htmlFor={props.id}>
            {label}
            {props.required && <span className="text-danger100">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          {...props}
          rows={rows}
          className={classNames(
            className,
            'hk-rounded p-2 w-full mt-1',
            'border-0 ring-1 ring-inset',
            {
              'ring-danger100': status === 'error',
              'ring-success': status === 'success',
              'ring-neutral20': status === 'default',
            },
            'bg-neutral5',
            'placeholder:text-neutral40',
            'focus:ring-2 focus:ring-primary focus:outline-none',
          )}
        />
        <div
          className={classNames('h-[17px] mt-0', {
            'text-danger100': status === 'error',
            'text-success-text': status === 'success',
          })}
        >
          {hint}
        </div>
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
