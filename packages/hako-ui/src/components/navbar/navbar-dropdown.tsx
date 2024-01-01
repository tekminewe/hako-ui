'use client';

import { forwardRef, useMemo, useState } from 'react';
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
}

export const NavbarDropdown = forwardRef<HTMLDivElement, NavbarDropdownProps>(({ items, selectedItemId }, ref) => {
  const [open, setOpen] = useState(false);

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.id === selectedItemId);
  }, [selectedItemId, items]);

  if (!items?.length) {
    return null;
  }

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <>
      <div className="cursor-pointer px-4 flex space-x-4 justify-between items-center" ref={ref} onClick={handleClick}>
        <p className="text-xl">{selectedItem?.label}</p>
        <HiChevronDown />
      </div>
      {open && (
        <ul>
          {items.map((item) => {
            return <li key={item.id}>{item.label}</li>;
          })}
        </ul>
      )}
    </>
  );
});

NavbarDropdown.displayName = 'NavbarDropdown';
