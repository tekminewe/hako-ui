import { Button } from '../button';
import { Table, TableProps } from '../table';

export interface ProTableProps<T extends object> extends TableProps<T> {
  request?: (params: any) => Promise<any>;
}

export const ProTable = <T extends object>({ request, ...props }: ProTableProps<T>) => {
  return (
    <div>
      <Button></Button>
      <Table<T> {...props} />
    </div>
  );
};
