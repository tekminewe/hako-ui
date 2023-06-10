import classNames from 'classnames';
import { forwardRef, HTMLAttributes, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Dropdown, DropdownItem, DropdownItemClickHandler } from '../dropdown';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

export type SelectOption = DropdownItem;
export type SelectOptionClickHandler = DropdownItemClickHandler;

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

  /**
   * If true, the select will display a loading spinner.
   * @type boolean
   * @example true
   * @default false
   */
  loading?: boolean;

  /**
   * The callback fired when the select is opened.
   * @returns
   * @example () => { console.log('opened') }
   * @default undefined
   */
  onOpen?: () => void;

  /**
   * The callback fired when an option is clicked.
   * @param item The clicked option
   * @param event The click event
   * @returns
   * @example (item, event) => { console.log(item, event) }
   * @default undefined
   */
  onOptionClick?: SelectOptionClickHandler;

  /**
   * The value of the select.
   * @type string
   * @example "home"
   * @default undefined
   */
  value?: DropdownItem['id'];
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      placeholder = 'Please select...',
      options,
      className,
      dropdownTitle,
      loading = false,
      onOpen,
      onOptionClick,
      value,
      ...props
    },
    ref,
  ) => {
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
      setOpen((open) => {
        if (!open) {
          onOpen?.();
        }
        return !open;
      });
    };

    const getSelectedValue = () => {
      if (value) {
        return options.find((option) => option.id === value)?.label;
      }

      return placeholder;
    };

    const handleOptionClick: DropdownItemClickHandler = (...args) => {
      setOpen(false);
      onOptionClick?.(...args);
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
          <span className="truncate text-sm flex-1 text-left">{getSelectedValue()}</span>
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
          loading={loading}
          selectedItemId={value}
          onItemClick={handleOptionClick}
        />
      </>
    );
  },
);

Select.displayName = 'Select';
