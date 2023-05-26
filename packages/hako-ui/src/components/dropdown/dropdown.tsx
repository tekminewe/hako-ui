'use client';

import classNames from 'classnames';
import { forwardRef, MouseEventHandler, useEffect, useLayoutEffect, useState } from 'react';
import { Portal } from '../portal';

export interface DropdownItem {
  /**
   * The label of the dropdown item
   * @type string
   * @example "Home"
   */
  label: string;

  /**
   * The callback function to be called when the dropdown item is clicked
   * @type React.ReactNode
   * @example () => console.log('Click');
   * @default undefined
   */
  onClick?: MouseEventHandler<HTMLLIElement>;

  /**
   * Class name of the dropdown item
   * @type string
   * @example "text-danger"
   * @default undefined
   */
  className?: string;
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
   * @type DropdownItem[][]
   * @example [[{ label: 'Home', onClick: () => console.log('Click') }]]
   * @required
   */
  sections: DropdownItem[][];

  /**
   * Callback function to be called when the dropdown is closed
   * @type () => void
   * @example () => setAnchorTo(null)
   * @returns
   */
  onClose?: () => void;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    { className, anchorTo = null, anchorPosition = 'bottom-right', open = false, sections, style, onClose, ...props },
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
            topPos = top + height;
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
            'dropdown fixed rounded-md shadow-md border bg-background border-on-background10 divide-y py-2 min-w-[100px] text-sm z-10',
          )}
          style={{ ...anchorStyle, ...style }}
          {...props}
        >
          {sections.map((section, sectionIndex) => {
            return (
              <ul key={sectionIndex}>
                {section.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={item.onClick}
                      className={classNames(
                        'px-4 py-2 cursor-pointer hover:bg-background-dark font-light',
                        item.className,
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
