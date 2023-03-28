import classNames from 'classnames';
import { forwardRef } from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The button's variant.
   * If `raw` is used, the badge will not have any styles.
   * 
   * @default "primary"
   * @type  | 'primary'
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
    | 'outline-default'
    | 'raw'
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
    | 'outline-default'
    | 'raw';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant = 'primary', ...props }, ref) => {
  return (
    <span
      className={classNames(className, 'px-1 py-[2px] text-xs rounded border', {
        'bg-primary border-primary text-on-primary': variant === 'primary',
        'bg-success border-success text-on-success': variant === 'success',
        'bg-danger border-danger text-on-danger': variant === 'danger',
        'bg-info border-info text-on-info': variant === 'info',
        'bg-warning border-warning text-on-warning': variant === 'warning',
        'bg-background-dark border-background-dark text-on-background-dark100': variant === 'default',

        'border-primary text-primary': variant === 'outline-primary',
        'border-success text-success': variant === 'outline-success',
        'border-danger text-danger': variant === 'outline-danger',
        'border-info text-info': variant === 'outline-info',
        'border-warning text-warning': variant === 'outline-warning',
        'border-on-background100 text-on-background100': variant === 'outline-default',
      })}
      ref={ref}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';
