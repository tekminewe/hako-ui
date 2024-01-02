'use client';

import classNames from 'classnames';
import { forwardRef, useLayoutEffect, useMemo, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

interface NavbarDropdownItem {
  /**
   * The value of the item
   */
  id: string;

  /**
   * The label of the item
   */
  label: string;
}

export interface NavbarDropdownProps {
  /**
   * The items of the dropdown
   * @type NavbarDropdownItem[]
   */
  items?: NavbarDropdownItem[];

  /**
   * Callback function to be called when an item is clicked
   * @param item Item that is clicked
   * @returns
   */
  onItemClick?: (item: NavbarDropdownItem) => void;

  /**
   * The id of the selected item
   * @type string
   * @example "home"
   * @default undefined
   */
  selectedItemId?: NavbarDropdownItem['id'];

  /**
   * The anchor element of the dropdown.
   * If anchor is provided, the dropdown will be positioned relative to the anchor element.
   * If anchor is not provided, the dropdown will be positioned relative to the viewport.
   * @type HTMLElement
   * @default null
   */
  anchorTo?: HTMLElement | null;
}

const offsetTop = 4;
export const NavbarDropdown = forwardRef<HTMLDivElement, NavbarDropdownProps>(
  ({ items, selectedItemId, anchorTo }, ref) => {
    const [open, setOpen] = useState(false);
    const selectedItem = useMemo(() => {
      return items?.find((item) => item.id === selectedItemId);
    }, [selectedItemId, items]);

    const [anchorStyle, setAnchorStyle] = useState<Record<string, string>>({});
    useLayoutEffect(() => {
      if (open) {
        document.body.classList.add('overflow-hidden');
        console.log('TEKMIN: ', anchorTo);
        if (anchorTo) {
          const { top, height } = anchorTo.getBoundingClientRect();
          const topPos = top + height + offsetTop;
          setAnchorStyle({
            top: `${topPos}px`,
            left: '0px',
            right: '0px',
          });
        }
      } else {
        document.body.classList.remove('overflow-hidden');
        if (anchorTo) {
          setAnchorStyle({});
        }
      }
    }, [anchorTo, open]);

    if (!items?.length) {
      return null;
    }

    const handleClick = () => setOpen((prev) => !prev);

    return (
      <>
        <div className="px-4 flex space-x-4 justify-between items-center" ref={ref} onClick={handleClick}>
          <p className="text-xl">{selectedItem?.label}</p>
          <HiChevronDown />
        </div>
        {open && (
          <ul className="fixed shadow-md hk-rounded" style={anchorStyle}>
            {items.map((item) => {
              return (
                <li
                  className={classNames('px-4 py-2 font-light overflow-hidden truncate', {
                    'font-medium': selectedItem?.id === item.id,
                  })}
                  key={item.id}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  },
);

NavbarDropdown.displayName = 'NavbarDropdown';
