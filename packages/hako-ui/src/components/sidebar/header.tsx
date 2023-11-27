import classNames from 'classnames';
import { useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Dropdown, DropdownProps } from '../dropdown';

export interface SidebarHeaderProps {
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
   * @type DropdownProps
   */
  dropdown?: DropdownProps;
}

export const SidebarHeader = ({ title, subtitle, dropdown }: SidebarHeaderProps) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown((show) => !show);
  };

  return (
    <>
      <div
        ref={anchorRef}
        onClick={handleClick}
        className={classNames('p-4 pb-0', {
          'cursor-pointer': !!dropdown,
        })}
      >
        {dropdown ? (
          <div className="flex items-center">
            <p className="hk-typo-h3">{title}</p>
            <BiChevronDown size={24} />
          </div>
        ) : (
          <p className="hk-typo-h3">{title}</p>
        )}
        <p>{subtitle}</p>
      </div>
      {dropdown && (
        <Dropdown
          {...dropdown}
          style={{
            ...dropdown.style,
            minWidth: `${dropdown.style?.minWidth ?? (anchorRef.current?.clientWidth ?? 0) - 16}px`,
          }}
          open={showDropdown}
          ref={null}
          anchorTo={anchorRef.current}
        />
      )}
    </>
  );
};
