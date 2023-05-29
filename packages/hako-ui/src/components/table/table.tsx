import { HTMLAttributes, forwardRef } from 'react';
import { TableColumn, TableHeader } from './header';
import { TableRow } from './row';
import classNames from 'classnames';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  columns: TableColumn[];

  datas: Record<string, string | number>[];
}

export const Table = forwardRef<HTMLTableElement, TableProps>(({ columns, datas, className, ...props }, ref) => {
  return (
    <div className={classNames('overflow-x-auto border min-w-full', className)} {...props} ref={ref}>
      <table className="min-w-full divide-y divide-background-darker">
        <TableHeader columns={columns} />
        <tbody>
          {datas.map((data, index) => {
            return <TableRow key={index} columns={columns} data={data} />;
          })}
        </tbody>
      </table>
    </div>
  );
});

Table.displayName = 'Table';
