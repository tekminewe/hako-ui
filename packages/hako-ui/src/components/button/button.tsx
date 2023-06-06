import classNames from 'classnames';
import { forwardRef } from 'react';
import { CgSpinner } from 'react-icons/cg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button's variant
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
    | 'text-primary'
    | 'text-success'
    | 'text-danger'
    | 'text-info'
    | 'text-warning'
    | 'text-danger'
    | 'text-default'
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
    | 'text-primary'
    | 'text-success'
    | 'text-danger'
    | 'text-info'
    | 'text-warning'
    | 'text-danger'
    | 'text-default';

  /**
   * The button's icon
   * @default undefined
   * @type ReactNode
   * @example "<IconSVG />"
   */
  icon?: React.ReactNode;

  /**
   * The button's icon position
   * @default "left"
   * @type "left" | "right"
   * @example "right"
   */
  iconPosition?: 'left' | 'right';

  /**
   * Show loading state of the button
   */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', icon, iconPosition = 'left', className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={classNames(className, 'hk-rounded border px-4 py-2 relative', {
          'bg-primary border-primary text-on-primary': variant === 'primary',
          'bg-success border-success text-on-success': variant === 'success',
          'bg-info border-info text-on-info': variant === 'info',
          'bg-warning border-warning text-on-warning': variant === 'warning',
          'bg-danger100 border-danger100 text-on-danger100': variant === 'danger',
          'bg-neutral10 border-neutral20 text-neutral90': variant === 'default',

          'border-primary text-primary': variant === 'outline-primary',
          'border-success text-success': variant === 'outline-success',
          'border-info text-info': variant === 'outline-info',
          'border-warning text-warning': variant === 'outline-warning',
          'border-danger100 text-danger100': variant === 'outline-danger',
          'border-neutral90 text-neutral90': variant === 'outline-default',

          'text-primary border-transparent': variant === 'text-primary',
          'text-success border-transparent': variant === 'text-success',
          'text-info border-transparent': variant === 'text-info',
          'text-warning border-transparent': variant === 'text-warning',
          'text-danger100 border-transparent': variant === 'text-danger',
          'text-default border-transparent': variant === 'text-default',
          'flex items-center': icon,
        })}
        disabled={props.disabled || props.loading}
      >
        {iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
        {props.loading && (
          <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0">
            <CgSpinner className="animate-spin" size={24} />
          </div>
        )}
        <span
          className={classNames({
            invisible: props.loading,
          })}
        >
          {props.children}
        </span>
        {iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
