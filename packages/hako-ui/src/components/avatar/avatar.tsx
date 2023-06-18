import classNames from 'classnames';
import { forwardRef } from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The URL of the image.
   * @default undefined
   * @example https://via.placeholder.com/150
   */
  src?: string;

  /**
   * The size of the avatar in pixel.
   * @default 40
   * @example 40
   */
  size?: number;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({ className, size = 40, src, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={classNames(className, 'rounded-full overflow-hidden')}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img src={src} />
    </div>
  );
});

Avatar.displayName = 'Badge';
