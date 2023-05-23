import { forwardRef } from 'react';
import { Drawer, DrawerProps } from '../drawer';
import { SidebarSection, SidebarSectionProps } from './section';

export interface SidebarProps extends DrawerProps {
  sections?: SidebarSectionProps['sections'];
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(({ sections, ...props }, ref) => {
  return (
    <Drawer {...props} behavior="always-show" ref={ref}>
      {sections && <SidebarSection sections={sections} />}
    </Drawer>
  );
});

Sidebar.displayName = 'Sidebar';
