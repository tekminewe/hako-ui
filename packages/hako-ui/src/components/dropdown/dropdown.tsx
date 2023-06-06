'use client';

import classNames from 'classnames';
import { forwardRef, useEffect, useLayoutEffect, useState } from 'react';
import { Portal } from '../portal';

export interface DropdownItem {
  /**
   * The id of the dropdown item
   * @type string
   * @example "home"
   */
  id: number | string;

  /**
   * The label of the dropdown item
   * @type string
   * @example "Home"
   */
  label: string;
}

export interface DropdownSection {
  /**
   * The title of the dropdown section
   */
  title?: string;

  /**
   * The items of the dropdown section
   */
  items: DropdownItem[];
}

export interface DropdownProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children'> {
  /**
   * The anchor element of the dropdown.
   * If anchor is provided, the dropdown will be positioned relative to the anchor element.
   * If anchor is not provided, the dropdown will be positioned relative to the viewport.
   * @type HTMLElement
   * @default null
   */
  anchorTo?: HTMLElement | null;

  /**
   * The position of the dropdown relative to the anchor element
   * @type 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right'
   * @default 'bottom-left'
   * @example "bottom-right"
   */
  anchorPosition?: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';

  /**
   * Whether the dropdown is open or not
   * @type boolean
   * @default false
   */
  open?: boolean;

  /**
   * The sections of the dropdown
   * @type DropdownItem[]
   * @example [{ title: 'Section 1', items: [{ id: 'home', label: 'Home' }] }]
   * @required
   */
  sections: DropdownSection[];

  /**
   * Callback function to be called when the dropdown is closed
   * @type () => void
   * @example () => setAnchorTo(null)
   * @returns
   */
  onClose?: () => void;

  /**
   * The callback function to be called when the dropdown item is clicked
   * @type React.ReactNode
   * @example () => console.log('Click');
   * @default undefined
   */
  onItemClick?: (item: DropdownItem, event: React.MouseEvent<HTMLLIElement>) => void;

  /**
   * The callback method to get the class name for the dropdown item
   * @type (item: DropdownItem, sectionIndex: number, itemIndex: number) => string
   * @example (item, sectionIndex, itemIndex) => itemIndex === 0 ? 'text-red-500' : ''
   * @default undefined
   */
  getClassNameForItem?: (item: DropdownItem, sectionIndex: number, itemIndex: number) => string;
}

const offsetTop = 4;
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      className,
      anchorTo = null,
      anchorPosition = 'bottom-right',
      onItemClick,
      open = false,
      sections,
      style,
      onClose,
      getClassNameForItem,
      ...props
    },
    ref,
  ) => {
    const [anchorStyle, setAnchorStyle] = useState<Record<string, string>>({});
    useLayoutEffect(() => {
      if (open) {
        document.body.classList.add('overflow-hidden');
        if (anchorTo) {
          const { top, left, height, width } = anchorTo.getBoundingClientRect();
          let topPos = top;
          if (anchorPosition.includes('bottom')) {
            topPos = top + height + offsetTop;
          }
          if (anchorPosition.includes('left')) {
            setAnchorStyle({
              top: `${topPos}px`,
              left: `${left}px`,
            });
          } else {
            setAnchorStyle({
              top: `${topPos}px`,
              right: `${window.innerWidth - (left + width)}px`,
            });
          }
        }
      } else {
        document.body.classList.remove('overflow-hidden');
        if (anchorTo) {
          setAnchorStyle({});
        }
      }
    }, [anchorPosition, anchorTo, open]);

    useEffect(() => {
      const handler = (event: MouseEvent) => {
        if (open) {
          if (event.target instanceof HTMLElement) {
            if (event.target !== anchorTo && !anchorTo?.contains(event.target) && !event.target?.closest('.dropdown')) {
              onClose?.();
            }
          }
        }
      };

      window.addEventListener('click', handler);

      return () => window.removeEventListener('click', handler);
    }, [anchorTo, onClose, open]);

    if (!open) {
      return null;
    }

    return (
      <Portal>
        <div
          ref={ref}
          className={classNames(
            className,
            'dropdown fixed hk-rounded shadow-md border bg-neutral10 hk-border divide-y py-2 min-w-[100px] text-sm z-10',
          )}
          style={{ ...anchorStyle, ...style }}
          {...props}
        >
          {sections.map((section, sectionIndex) => {
            return (
              <ul key={sectionIndex}>
                {section.items.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      onClick={(e) => onItemClick?.(item, e)}
                      className={classNames(
                        'px-4 py-2 cursor-pointer hover:bg-neutral20 font-light overflow-hidden truncate',
                        getClassNameForItem?.(item, sectionIndex, index),
                      )}
                    >
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </Portal>
    );
  },
);

Dropdown.displayName = 'Dropdown';
