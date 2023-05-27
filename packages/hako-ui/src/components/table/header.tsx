export interface TableColumn {
  title: string;

  key: string;
}

export interface TableHeaderProps {
  columns: TableColumn[];
}

export const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead>
      <tr className="border-b border-gray-200">
        {columns.map((column, index) => {
          return (
            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {column.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
