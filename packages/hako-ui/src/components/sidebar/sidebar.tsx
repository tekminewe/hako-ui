import { forwardRef } from 'react';
import { Drawer, DrawerProps } from '../drawer';
import { SidebarSection, SidebarSectionProps } from './section';

export interface SidebarProps extends DrawerProps {
  /**
   * The sections of the sidebar
   * @type SidebarSectionProps['sections']
   * @example [{ title: 'Dashboard', items: [{ title: 'Users' }] }]
   * @default undefined
   */
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
