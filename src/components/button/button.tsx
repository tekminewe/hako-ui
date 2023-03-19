import classNames from 'classnames';
import { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button's variant
   * @default "solid"
   * @type "solid" | "outline"
   * @example "outline"
   */
  variant?: 'solid' | 'outline';

  /**
   * The button's color
   * @default "primary"
   * @type "primary" | "success" | "info" | "warning" | "danger"
   * @example "success"
   */
  color?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', color = 'primary', ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={classNames(className, 'rounded-md p-sm', {
          'bg-primary text-on-primary': color === 'primary' && variant === 'solid',
          'bg-success text-on-success': color === 'success' && variant === 'solid',
          'bg-info text-on-info': color === 'info' && variant === 'solid',
          'bg-warning text-on-warning': color === 'warning' && variant === 'solid',
          'bg-danger text-on-danger': color === 'danger' && variant === 'solid',
        })}
      />
    );
  },
);

Button.displayName = 'Button';
