import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const Button = ({ className, isActive, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(className, 'hk-rounded flex items-center justify-center p-1', {
        'bg-neutral70 text-neutral5': isActive,
        'text-neutral70': !isActive,
      })}
    >
      {children}
    </button>
  );
};
