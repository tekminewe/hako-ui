import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const Button = ({ className, isActive, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(className, {
        'bg-primary': isActive,
      })}
    >
      {children}
    </button>
  );
};
