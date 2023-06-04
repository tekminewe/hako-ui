export interface TableColumn<T> {
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
  key: keyof T;

  /**
   * The render function of the column.
   * @param data
   * @returns
   */
  render?: (data: T[keyof T]) => React.ReactNode;
}

export interface TableHeaderProps<T> {
  /**
   * The columns of the table.
   * @type {TableColumn[]}
   * @required
   */
  columns: TableColumn<T>[];
}

export const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => {
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
