import classNames from 'classnames';
import { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button's color
   * @default "primary"
   * @type "primary" | "success" | "danger" | "info" | "warning" | "danger" | 'default
   * @example "success"
   */
  variant?:
    | 'primary'
    | 'success'
    | 'danger'
    | 'info'
    | 'warning'
    | 'danger'
    | 'default'
    | 'outline-primary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-info'
    | 'outline-warning'
    | 'outline-danger'
    | 'outline-default';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={classNames(className, 'rounded-full border px-hk-md py-hk-xs', {
          'bg-primary border-primary text-on-primary': variant === 'primary',
          'bg-success border-success text-on-success': variant === 'success',
          'bg-info border-info text-on-info': variant === 'info',
          'bg-warning border-warning text-on-warning': variant === 'warning',
          'bg-danger border-danger text-on-danger': variant === 'danger',
          'bg-background-dark border-background-dark text-on-background-dark': variant === 'default',

          'border-primary text-primary': variant === 'outline-primary',
          'border-success text-success': variant === 'outline-success',
          'border-info text-info': variant === 'outline-info',
          'border-warning text-warning': variant === 'outline-warning',
          'border-danger text-danger': variant === 'outline-danger',
          'border-on-background text-on-background': variant === 'outline-default',
        })}
      />
    );
  },
);

Button.displayName = 'Button';
