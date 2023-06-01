import { Button } from '../button';
import { Table, TableProps } from '../table';

export interface ProTableProps extends TableProps {
  request?: (params: any) => Promise<any>;
}

export const ProTable = ({ request, ...props }: ProTableProps) => {
  return (
    <div>
      <Button></Button>
      <Table {...props} />
    </div>
  );
};
