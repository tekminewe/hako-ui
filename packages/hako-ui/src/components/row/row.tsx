import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';
import { LayoutColumn } from '../types';
import {
  lgLayoutColumnToClassName,
  mdLayoutColumnToClassName,
  smLayoutColumnToClassName,
  xlLayoutColumnToClassName,
  xsLayoutColumnToClassName,
  xxlLayoutColumnToClassName,
} from '../../utils/size';
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

  /**
   * The default columns of the layout column
   * @type LayoutColumn
   * @default 12
   * @example 12
   */
  xs?: LayoutColumn;

  sm?: LayoutColumn;

  md?: LayoutColumn;

  lg?: LayoutColumn;

  xl?: LayoutColumn;

  xxl?: LayoutColumn;
}

/**
 * The row component is used to create a row layout.
 * It uses the flexbox layout to create a row layout.
 */
export const Row = forwardRef<HTMLDivElement, RowProps>(
  ({ xs, sm, md, lg, xl, xxl, className, verticalAlign, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          'flex',
          className,
          {
            'items-center': verticalAlign === 'center',
            'items-start': verticalAlign === 'top',
            'items-end': verticalAlign === 'bottom',
            'items-stretch': verticalAlign === 'stretch',
          },
          xs && xsLayoutColumnToClassName(xs),
          sm && smLayoutColumnToClassName(sm),
          md && mdLayoutColumnToClassName(md),
          lg && lgLayoutColumnToClassName(lg),
          xl && xlLayoutColumnToClassName(xl),
          xxl && xxlLayoutColumnToClassName(xxl),
        )}
        {...props}
      />
    );
  },
);

Row.displayName = 'Row';
