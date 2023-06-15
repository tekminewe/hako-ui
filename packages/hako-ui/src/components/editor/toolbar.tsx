import { ReactNode } from 'react';

export const Toolbar = ({ children }: { children: ReactNode }) => {
  return <div className="border-b hk-border gap-4 py-4 grid grid-cols-8 md:flex">{children}</div>;
};
