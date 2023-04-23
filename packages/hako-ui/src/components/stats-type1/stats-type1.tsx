import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';

export interface Stats {
  /**
   * The icon of the stats
   * @type {ReactNode}
   * @example <Icon />
   */
  icon?: ReactNode;

  /**
   * The title of the stats
   * @type {string}
   * @example 'Active Users'
   * @required
   */
  title: string;

  /**
   * The value of the stats
   * @type {string}
   * @example '100M+'
   * @required
   */
  value: string;
}

export interface StatsType1Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The stats of the stats type 1
   * @type {Stats[]}
   * @example [{ title: 'Active Users', value: '100M+' }]
   * @required
   */
  stats: Stats[];
}

export const StatsType1 = forwardRef<HTMLDivElement, StatsType1Props>(({ stats, className, ...props }, ref) => {
  return (
    <div
      className={classNames(
        className,
        'grid gap-8 grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center lg:space-x-16 lg:gap-0',
      )}
      ref={ref}
      {...props}
    >
      {stats.map((stat, index) => {
        return (
          <div key={index} className="flex items-center space-x-4">
            {stat.icon && <div className="flex items-center justify-end flex-1">{stat.icon}</div>}
            <div className="flex-[2] flex flex-col items-center justify-center">
              <p className="font-semibold text-3xl text-primary">{stat.value}</p>
              <p className="whitespace-nowrap">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
});

StatsType1.displayName = 'StatsType1';
