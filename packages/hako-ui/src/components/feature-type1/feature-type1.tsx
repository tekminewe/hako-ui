import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';
import { FeatureItem1, FeatureItem1Props } from '../feature-item1';

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
   * @type {FeatureItem1Props[]}
   * @default []
   * @example [{ title: 'Feature 1', description: 'This is feature 1' }]
   */
  features?: FeatureItem1Props[];
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
            <FeatureItem1 key={index} {...feature} />
          ))}
        </div>
      </div>
    );
  },
);

FeatureType1.displayName = 'FeatureType1';
