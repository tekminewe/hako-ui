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

  /**
   * The className of the item when hovered
   * @type string
   * @example 'bg-gray-200'
   */
  hoverClassName?: string;
}

export const SidebarSection = ({ sections, hoverClassName }: SidebarSectionProps) => {
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
                    onClick={item.onClick}
                    alwaysShowSubItems={item.alwaysShowSubItems}
                    hoverClassName={hoverClassName}
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
