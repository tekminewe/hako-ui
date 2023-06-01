import { ReactNode } from 'react';
import { TableColumn } from './header';

export interface TableRowProps {
  /**
   * The columns of the table.
   * @type {TableColumn[]}
   * @required
   * @example [{ title: 'ID', key: 'id' }]
   */
  columns: TableColumn[];

  /**
   * The data of the table.
   * @type {Record<string, unknown>}
   * @required
   * @example { id: 1 }
   */
  data: Record<string, unknown>;
}

export const TableRow = ({ data, columns }: TableRowProps) => {
  const renderData = (data: unknown) => {
    if (typeof data === 'number' || typeof data === 'string') {
      return data;
    }

    return JSON.stringify(data);
  };

  return (
    <tr className="border-b border-neutral20">
      {columns.map((column, index) => {
        return (
          <td key={index} className="px-6 py-4 whitespace-nowrap text-sm">
            {column.render ? column.render(data[column.key]) : (renderData(data[column.key]) as ReactNode)}
          </td>
        );
      })}
    </tr>
  );
};
