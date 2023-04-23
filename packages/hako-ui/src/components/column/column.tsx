import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The horizontal alignment of the column.
   * 'left' will align the child to the left of the container.
   * 'center' will align the child to the center of the container.
   * 'right' will align the child to the right of the container.
   * 'stretch' will stretch the child to the width of the container.
   * @type 'start' | 'center' | 'end' | 'stretch'
   * @default undefined
   */
  horizontalAlign?: 'left' | 'center' | 'right' | 'stretch';
}

/**
 * The column component is used to create a column layout.
 * It uses the flexbox layout to create a column layout.
 */
export const Column = forwardRef<HTMLDivElement, ColumnProps>(({ className, horizontalAlign, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('flex flex-col', className, {
        'items-center': horizontalAlign === 'center',
        'items-start': horizontalAlign === 'left',
        'items-end': horizontalAlign === 'right',
        'items-stretch': horizontalAlign === 'stretch',
      })}
      {...props}
    />
  );
});

Column.displayName = 'Column';
