import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The horizontal alignment of the row.
   * 'left' will align the child to the left of the container.
   * 'center' will align the child to the center of the container.
   * 'right' will align the child to the right of the container.
   * 'stretch' will stretch the child to the width of the container.
   * @type 'top' | 'center' | 'bottom' | 'stretch'
   * @default undefined
   */
  verticalAlign?: 'top' | 'center' | 'bottom' | 'stretch';
}

/**
 * The row component is used to create a row layout.
 * It uses the flexbox layout to create a row layout.
 */
export const Row = forwardRef<HTMLDivElement, RowProps>(({ className, verticalAlign, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('flex', className, {
        'items-center': verticalAlign === 'center',
        'items-start': verticalAlign === 'top',
        'items-end': verticalAlign === 'bottom',
        'items-stretch': verticalAlign === 'stretch',
      })}
      {...props}
    />
  );
});

Row.displayName = 'Row';
