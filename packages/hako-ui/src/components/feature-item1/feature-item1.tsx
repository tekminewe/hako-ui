import classNames from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { Card } from '../card';

export interface FeatureItem1Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * The icon of the feature
   * @type {ReactNode}
   * @example <Icon />
   * @required
   */
  icon: ReactNode;

  /**
   * The title of the feature
   * @type {string}
   * @example 'Feature 1'
   * @required
   */
  title: string;

  /**
   * The description of the feature
   * @type {string}
   * @example 'This is feature 1'
   * @required
   */
  description: string;

  /**
   * The learn more of the feature
   * @type {LearnMore}
   * @default {}
   * @example { title: 'Learn More', link: 'https://www.google.com' }
   */
  learnMore?: {
    /**
     * The title of the learn more
     * @type {string}
     * @example 'Learn More'
     * @required
     */
    title: ReactNode;

    /**
     * The link of the learn more
     * @type {string}
     * @example 'https://www.google.com'
     * @required
     */
    link: string;
  };

  /**
   * The alignment of the feature
   * @type {'left' | 'center'}
   * @default 'left'
   * @example 'left'
   */
  align?: 'left' | 'center';

  /**
   * The border of the feature
   * @type {boolean}
   * @default true
   * @example true
   */
  border?: boolean;
}

/**
 * One of the items for the feature section
 */
export const FeatureItem1 = forwardRef<HTMLDivElement, FeatureItem1Props>(
  ({ icon, title, description, className, onClick, align = 'left', border = true, learnMore, ...props }, ref) => {
    return (
      <Card
        className={classNames(className, {
          'cursor-pointer': !!onClick,
          'flex flex-col items-center': align === 'center',
          'border-0 shadow-none': !border,
        })}
        {...props}
        onClick={onClick}
        ref={ref}
      >
        {icon}
        <h3 className="hk-typo-h3 my-2">{title}</h3>
        <p
          className={classNames('text-neutral50', {
            'text-center': align === 'center',
          })}
        >
          {description}
        </p>
        {learnMore && (
          <a href={learnMore.link} className="text-primary">
            {learnMore.title}
          </a>
        )}
      </Card>
    );
  },
);

FeatureItem1.displayName = 'FeatureType1';
