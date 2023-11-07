interface SidebarDropdown {
  sections: string[];
}

export interface HeaderProps {
  /**
   * The title of the sidebar. Can be used to display the app name etc
   * @type string
   * @example 'Dashboard'
   */
  title: string;

  /**
   * The subtitle of the sidebar, can used to display the username or role etc
   * @type string
   * @example 'Admin'
   */
  subtitle: string;

  /**
   * Dropdown of the sidebar header
   * @type SidebarDropdown
   */
  dropdown?: SidebarDropdown;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="p-4">
      <p className="hk-typo-h3">{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};
