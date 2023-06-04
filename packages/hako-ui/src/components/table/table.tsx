import { HTMLAttributes, forwardRef } from 'react';
import { TableColumn, TableHeader } from './header';
import { TableRow } from './row';
import classNames from 'classnames';

export interface TableProps<T extends object> extends HTMLAttributes<HTMLTableElement> {
  /**
   * The columns of the table.
   * @type {TableColumn[]}
   * @default []
   * @required
   */
  columns: TableColumn<T>[];

  /**
   * The data of the table.
   * @type {T[]}
   * @default []
   * @required
   * @example
   */
  data: T[];

  /**
   * The callback function when the row is clicked.
   * @param data
   * @param event
   * @returns
   * @example (data, event) => console.log(data)
   */
  onRowClick?: (data: T, event: React.MouseEvent<HTMLTableRowElement>) => void;

  /**
   * The text to be displayed when the table is empty.
   * @type {string}
   * @default 'No data'
   */
  emtpyText?: string;
}

const Component = <T extends object>(
  { columns, data, className, emtpyText = 'No data', onRowClick, ...props }: TableProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  return (
    <div className={classNames('overflow-x-auto border-0 min-w-full', className)} {...props} ref={ref}>
      <table className="min-w-full divide-y divide-neutral20">
        <TableHeader<T> columns={columns} />
        <tbody>
          {data.length === 0 && (
            <tr>
              <td className="text-center py-4 text-neutral50" colSpan={columns.length}>
                {emtpyText}
              </td>
            </tr>
          )}
          {data.map((d, index) => {
            return <TableRow<T> onClick={onRowClick} key={index} columns={columns} data={d} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export const Table = forwardRef(Component) as <T extends Record<string, unknown>>(
  props: TableProps<T> & { ref?: React.ForwardedRef<HTMLTableColElement> },
) => ReturnType<typeof Component>;
