import classNames from 'classnames';
import { forwardRef, HTMLAttributes, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Dropdown, DropdownItem } from '../dropdown';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

export type SelectOption = DropdownItem;

export interface SelectProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * The text to display when the select is empty.
   */
  placeholder?: string;

  /**
   * The title to show on top of the options dropdown.
   * @type string
   * @example "Home"
   */
  dropdownTitle?: string;

  /**
   * The options of the select.
   * @type SelectOption[]
   * @example [{ id: 'home', label: 'Home' }]
   */
  options: SelectOption[];
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ placeholder = 'Please select...', options, className, dropdownTitle, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(ref, () => buttonRef.current);

    const section = useMemo(() => {
      return [
        {
          title: dropdownTitle,
          items: options,
        },
      ];
    }, [dropdownTitle, options]);

    const handleClick = () => {
      setOpen((open) => !open);
    };

    return (
      <>
        <button
          {...props}
          onClick={handleClick}
          className={classNames(
            'hk-border border hk-rounded p-1 pl-3 overflow-hidden flex items-center bg-neutral5',
            className,
          )}
          ref={buttonRef}
        >
          <span className="truncate text-sm flex-1">{placeholder}</span>
          <span className="text-neutral40 px-2">
            <GoTriangleUp size={10} />
            <GoTriangleDown size={10} />
          </span>
        </button>
        <Dropdown
          style={{
            width: `${buttonRef.current?.clientWidth}px`,
          }}
          anchorTo={buttonRef.current}
          anchorPosition="bottom-left"
          open={open}
          sections={section}
        ></Dropdown>
      </>
    );
  },
);

Select.displayName = 'Select';
