import { Card } from '../card';

export interface Feature {
  /**
   * The title of the feature
   * @type {string}
   * @default ''
   * @example 'Feature 1'
   * @required
   */
  title: string;

  /**
   * The description of the feature
   * @type {string}
   * @default ''
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
     * @default ''
     * @example 'Learn More'
     * @required
     */
    title: string;

    /**
     * The link of the learn more
     * @type {string}
     * @default ''
     * @example 'https://www.google.com'
     * @required
     * @pattern ^https?:\/\/
     * @patternDescription Must be a valid URL
     * @format uri
     * @formatDescription Must be a valid URL
     * @maxLength 2083
     * @maxLengthDescription Must be less than 2083 characters
     * @minLength 1
     * @minLengthDescription Must be at least 1 character
     * @example 'https://www.google.com'
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
   */
  title?: string;

  /**
   * The description of the feature
   * @type {string}
   * @default ''
   * @example 'This is a feature type 1'
   */
  description?: string;

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
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 mb-2">{feature.description}</p>
              {feature.learnMore && (
                <a href={feature.learnMore.link} className="text-primary mt-8 block">
                  {feature.learnMore.title}
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
