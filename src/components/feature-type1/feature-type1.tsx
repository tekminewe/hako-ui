import classNames from 'classnames';
import { ReactNode } from 'react';
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

export interface FeatureType1Props {
  /**
   * The title of the feature
   * @type {string}
   * @default ''
   * @example 'Feature Type 1'
   * @required
   */
  title: string;

  /**
   * The description of the feature
   * @type {string}
   * @default ''
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
 * Feature List with Card and optional CTA
 */
export const FeatureType1 = ({ title, description, features }: FeatureType1Props) => {
  return (
    <div className="flex flex-col items-center container mx-auto">
      <h2 className="text-5xl font-bold mb-8 text-center">{title}</h2>
      <p className="lg:w-1/2 mx-auto mb-12 text-center">{description}</p>
      <div className="flex flex-col md:flex-row justify-between md:space-x-8 md:space-y-0 space-y-8">
        {features?.map((feature, index) => (
          <Card key={index}>
            {feature.icon}
            <h3 className="text-lg font-bold mb-2 mt-4">{feature.title}</h3>
            <p
              className={classNames('text-gray-500', {
                'mb-8': !!feature.learnMore,
              })}
            >
              {feature.description}
            </p>
            {feature.learnMore && (
              <a href={feature.learnMore.link} className="text-primary flex justify-start items-center space-x-1">
                {feature.learnMore.title}
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
