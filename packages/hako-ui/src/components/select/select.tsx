import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';
import { Dropdown, DropdownItem } from '../dropdown';

export type SelectOption = DropdownItem;

export interface SelectProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * The text to display when the select is empty.
   */
  emptyText?: string;

  options: SelectOption[][];
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ emptyText = 'Please select...', options, className, ...props }, ref) => {
    return (
      <>
        <button {...props} className={classNames('hk-border border hk-rounded p-2 px-4', className)} ref={ref}>
          {emptyText}
        </button>
        <Dropdown sections={options}></Dropdown>
      </>
    );
  },
);

Select.displayName = 'Select';
