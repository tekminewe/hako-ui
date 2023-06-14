import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const Button = ({ className, isActive, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(className, 'hk-rounded', {
        'bg-neutral70 text-neutral5': isActive,
        'text-neutral70': !isActive,
      })}
    >
      {children}
    </button>
  );
};
