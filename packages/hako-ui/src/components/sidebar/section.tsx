interface SidebarSection {
  title?: string;
  items: SidebarItem[];
}

interface SidebarItem {
  title: string;
  icon?: React.ReactNode;
}

export interface SidebarSectionProps {
  sections: SidebarSection[];
}

export const SidebarSection = ({ sections }: SidebarSectionProps) => {
  return (
    <div className="p-4">
      {sections.map((section, index) => {
        return (
          <div key={section.title + '' + index}>
            {section.title && <div>{section.title}</div>}
            <ul>
              {section.items.map((item, index) => {
                return (
                  <li
                    className="flex items-center space-x-2 font-semibold p-2 hover:bg-background-dark rounded cursor-pointer"
                    key={item.title + index}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <a>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
