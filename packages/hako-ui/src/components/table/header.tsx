export interface TableColumn {
  /**
   * The title of the column.
   * @type {string}
   * @required
   * @example 'ID'
   */
  title: string;

  /**
   * The key of the column in the data.
   * @type {string}
   * @required
   * @example 'id'
   */
  key: string;

  /**
   * The render function of the column.
   * @param data
   * @returns
   */
  render?: (data: unknown) => React.ReactNode;
}

export interface TableHeaderProps {
  /**
   * The columns of the table.
   * @type {TableColumn[]}
   * @required
   */
  columns: TableColumn[];
}

export const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead>
      <tr className="border-b border-neutral30">
        {columns.map((column, index) => {
          return (
            <th key={index} className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
              {column.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
