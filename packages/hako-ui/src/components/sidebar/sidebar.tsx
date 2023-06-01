'use client';

import { forwardRef } from 'react';
import { Drawer, DrawerProps } from '../drawer';
import { SidebarSection, SidebarSectionProps } from './section';
import classNames from 'classnames';

export interface SidebarProps extends DrawerProps {
  /**
   * The sections of the sidebar
   * @type SidebarSectionProps['sections']
   * @example [{ title: 'Dashboard', items: [{ title: 'Users' }] }]
   * @default undefined
   */
  sections?: SidebarSectionProps['sections'];

  /**
   * The className of the background
   * @type string
   * @example 'bg-gray-100'
   */
  backgroundClassName?: string;

  /**
   * The className of the item when hovered
   * @type string
   * @default 'hover:bg-neutral10'
   * @example 'hover:bg-gray-200'
   */
  hoverClassName?: string;

  /**
   * The className of the text in the sidebar
   * @type string
   * @example 'text-gray-900'
   */
  textClassName?: string;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    { sections, className, backgroundClassName, hoverClassName = 'hover:bg-neutral10', textClassName, ...props },
    ref,
  ) => {
    return (
      <Drawer
        {...props}
        className={classNames(className, backgroundClassName, textClassName)}
        behavior="always-show"
        ref={ref}
      >
        {sections && <SidebarSection sections={sections} hoverClassName={hoverClassName} />}
      </Drawer>
    );
  },
);

Sidebar.displayName = 'Sidebar';
