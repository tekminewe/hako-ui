import { ReactNode } from 'react';

export const Toolbar = ({ children }: { children: ReactNode }) => {
  return <div className="border-b gap-2 p-2 grid grid-cols-8 md:flex">{children}</div>;
};
