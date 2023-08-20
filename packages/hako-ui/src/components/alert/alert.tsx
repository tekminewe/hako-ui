import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The type of the alert.
   * @type 'success' | 'info' | 'warning' | 'danger'
   * @default 'danger'
   * @required
   */
  type?: 'success' | 'info' | 'warning' | 'danger';
}

export const Alert = ({ children, type = 'danger', className, ...props }: AlertProps) => {
  return (
    <div
      className={classNames(className, 'border px-4 py-3 hk-rounded mb-4 text-sm', {
        'bg-danger5 bg-red-50 border-danger100 text-danger100': type === 'danger',
        'bg-success-bg text-success-text border-success-border': type === 'success',
        'bg-info-bg text-info-text border-info-border': type === 'info',
        'bg-warning-bg text-warning-text border-warning-border': type === 'warning',
      })}
      role="alert"
      {...props}
    >
      {children}
    </div>
  );
};
