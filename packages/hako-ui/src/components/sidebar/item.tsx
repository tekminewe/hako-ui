'use client';

import classNames from 'classnames';
import { MouseEventHandler, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export interface SidebarItemProps {
  /**
   * Title of the item
   * @type string
   * @required
   * @example 'Users'
   */
  title: string;

  /**
   * Icon of the item
   * @type React.ReactNode
   * @example <AiOutlineHome size={24} />
   * @default undefined
   */
  icon?: React.ReactNode;

  /**
   * Click handler of the item
   * @type MouseEventHandler<HTMLButtonElement>
   * @example () => console.log('clicked')
   * @default undefined
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Sub items of the item
   * @type SidebarSubItem[]
   * @example [{ title: 'Roles' }, { title: 'Users' }]
   * @default undefined
   */
  subItems?: SidebarSubItem[];

  /**
   * Whether the sub items are always shown or not
   * If true, the sub items will always be shown and the arrow icon will be hidden
   * @type boolean
   * @default false
   * @example true
   */
  alwaysShowSubItems?: boolean;

  /**
   * The className of the item when hovered
   * @type string
   * @example 'hover:bg-gray-200'
   */
  hoverClassName?: string;
}

export interface SidebarSubItem {
  /**
   * Title of the sub item
   * @type string
   * @required
   * @example 'Roles'
   */
  title: string;

  /**
   * Icon of the sub item
   * @type MouseEventHandler<HTMLButtonElement>
   * @example () => console.log('clicked')
   * @default undefined
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const SidebarItem = ({
  title,
  icon,
  subItems,
  onClick,
  hoverClassName,
  alwaysShowSubItems = false,
}: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(alwaysShowSubItems);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (subItems) {
      setIsOpen((open) => !open || alwaysShowSubItems);
    }

    onClick?.(e);
  };

  return (
    <li>
      <button
        className={classNames('flex items-center space-x-2 p-2 hk-rounded w-full', {
          [`cursor-pointer ${hoverClassName}`]: !alwaysShowSubItems,
          'cursor-default': alwaysShowSubItems,
        })}
        onClick={handleClick}
      >
        {icon && <span>{icon}</span>}
        <span className="flex-1 text-left">{title}</span>
        {subItems && !alwaysShowSubItems && (
          <span className="ml-auto">
            <MdOutlineKeyboardArrowDown size={24} />
          </span>
        )}
      </button>
      {subItems && isOpen && (
        <ul>
          {subItems.map((subItem, index) => {
            return (
              <li key={subItem.title + index}>
                <button
                  className={classNames('text-left p-2 font-light hk-rounded cursor-pointer w-full', hoverClassName, {
                    'pl-10': !!icon,
                  })}
                  onClick={subItem.onClick}
                >
                  {subItem.title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
