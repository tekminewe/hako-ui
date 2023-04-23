import classNames from 'classnames';
import { forwardRef } from 'react';

export interface FooterType1Props extends React.HTMLAttributes<HTMLElement> {
  /**
   * The footer's copyright
   * @default ""
   * @type string
   * @example "© 2023 Hako UI. All rights reserved."
   */
  copyright?: string;
}
export const FooterType1 = forwardRef<HTMLElement, FooterType1Props>(({ className, copyright = '', ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={classNames(className, 'text-on-background75 h-[120px] flex items-center justify-center')}
      {...props}
    >
      <div className="container mx-auto text-center">
        <p>{copyright}</p>
      </div>
    </footer>
  );
});
FooterType1.displayName = 'FooterType1';
