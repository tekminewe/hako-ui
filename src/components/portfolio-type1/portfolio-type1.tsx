import { Card } from '../card';

export interface Project {
  /**
   * The image of the project
   * @type {string}
   * @example 'https://www.google.com/image.png'
   * @required
   */
  image: string;

  /**
   * The title of the project
   * @type {string}
   * @example 'Project 1'
   * @required
   */
  title: string;

  /**
   * The description of the project
   * @type {string}
   * @example 'This is project 1'
   * @required
   */
  description: string;
}

export interface PortfolioType1Props {
  /**
   * The title of the portfolio
   * @type {string}
   * @example 'My Portfolio'
   * @required
   */
  title: string;

  /**
   * The description of the portfolio
   * @type {string}
   * @example 'Checkout my projects'
   * @required
   */
  description: string;

  /**
   * The list of projects
   * @type {Project[]}
   * @default []
   */
  projects?: Project[];
}

/**
 * Feature List with Card and optional CTA
 */
export const PortfolioType1 = ({ title, description, projects }: PortfolioType1Props) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="mb-12">{description}</p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {projects?.map((project, index) => (
          <Card key={index}>
            <img src={project.image} alt={project.title} />
            <p className="text-lg font-semibold mb-2 mt-4">{project.title}</p>
            <p className="text-gray-500">{project.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
