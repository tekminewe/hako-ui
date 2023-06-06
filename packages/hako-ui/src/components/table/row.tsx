import { ReactNode } from 'react';
import { TableColumn } from './header';
import classNames from 'classnames';

export interface TableRowProps<T extends object> {
  /**
   * The columns of the table.
   * @type {TableColumn[]}
   * @required
   * @example [{ title: 'ID', key: 'id' }]
   */
  columns: TableColumn<T>[];

  /**
   * The data of the table.
   * @type {T}
   * @required
   * @example { id: 1 }
   */
  data: T;

  /**
   * The callback function when the row is clicked.
   *
   * @param data
   * @param event
   * @returns
   */
  onClick?: (data: T, event: React.MouseEvent<HTMLTableRowElement>) => void;
}

export const TableRow = <T extends object>({ data, columns, onClick }: TableRowProps<T>) => {
  const renderData = (data: T[keyof T]) => {
    if (typeof data === 'number' || typeof data === 'string') {
      return data;
    }

    return JSON.stringify(data);
  };

  return (
    <tr
      className={classNames('border-b border-neutral20', {
        'hover:bg-neutral10 cursor-pointer': !!onClick,
      })}
      onClick={(e) => onClick?.(data, e)}
    >
      {columns.map((column, index) => {
        return (
          <td key={index} className="px-6 py-4 whitespace-nowrap text-sm">
            {column.render
              ? column.render(data[column.key as keyof T])
              : (renderData(data[column.key as keyof T]) as ReactNode)}
          </td>
        );
      })}
    </tr>
  );
};
