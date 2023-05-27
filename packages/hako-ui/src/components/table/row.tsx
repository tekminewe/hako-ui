import { TableColumn } from './header';

export interface TableRowProps {
  columns: TableColumn[];

  data: Record<string, string | number>;
}

export const TableRow = ({ data, columns }: TableRowProps) => {
  return (
    <tr className="border-b border-gray-200">
      {columns.map((column, index) => {
        return (
          <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {data[column.key]}
          </td>
        );
      })}
    </tr>
  );
};