'use client';

import { SidebarItem, SidebarItemProps } from './item';

interface SidebarSection {
  /**
   * Title of the section
   * @type string
   * @example 'Dashboard'
   * @default undefined
   */
  title?: string;

  /**
   * Items of the section
   * @type SidebarItemProps[]
   * @required
   * @example [{ title: 'Users' }]
   */
  items: SidebarItemProps[];
}

export interface SidebarSectionProps {
  /**
   * The sections of the sidebar
   * @type SidebarSection[]
   * @required
   * @example [{ title: 'Dashboard', items: [{ title: 'Users' }] }]
   */
  sections: SidebarSection[];
}

export const SidebarSection = ({ sections }: SidebarSectionProps) => {
  return (
    <div className="p-4 font-medium">
      {sections.map((section, index) => {
        return (
          <div key={section.title + '' + index}>
            {section.title && <div>{section.title}</div>}
            <ul>
              {section.items.map((item, index) => {
                return (
                  <SidebarItem
                    key={item.title + index}
                    title={item.title}
                    icon={item.icon}
                    subItems={item.subItems}
                    alwaysShowSubItems={item.alwaysShowSubItems}
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
