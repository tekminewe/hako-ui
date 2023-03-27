import classNames from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { Card } from '../card';

export interface Feature {
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
}

export interface FeatureType1Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * The title of the feature
   * @type {string}
   * @example 'Feature Type 1'
   * @required
   */
  title: string;

  /**
   * The description of the feature
   * @type {string}
   * @example 'This is a feature type 1'
   * @required
   */
  description: string;

  /**
   * The list of features
   * @type {Feature[]}
   * @default []
   * @example [{ title: 'Feature 1', description: 'This is feature 1' }]
   */
  features?: Feature[];
}

/**
 * Showcase your features with this component in a grid layout of 1 column for mobile, 3 columns for tablet desktop.
 * Each feature consists of an icon, title, description, and optional learn more link.
 */
export const FeatureType1 = forwardRef<HTMLDivElement, FeatureType1Props>(
  ({ title, description, features = [], className, ...props }, ref) => {
    return (
      <div ref={ref} className={classNames('flex flex-col items-center container mx-auto', className)} {...props}>
        <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
        <p className="lg:w-1/2 mx-auto mb-12 text-center">{description}</p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {features?.map((feature, index) => (
            <Card key={index}>
              {feature.icon}
              <h3 className="text-lg font-semibold my-2">{feature.title}</h3>
              <p
                className={classNames('text-gray-500', {
                  'mb-8': !!feature.learnMore,
                })}
              >
                {feature.description}
              </p>
              {feature.learnMore && (
                <a href={feature.learnMore.link} className="text-primary">
                  {feature.learnMore.title}
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    );
  },
);

FeatureType1.displayName = 'FeatureType1';
