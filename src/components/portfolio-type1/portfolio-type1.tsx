import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Badge, BadgeProps } from '../badge';
import { Card } from '../card';
import { useMemo, useState } from 'react';
import classNames from 'classnames';

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

  /**
   * The label of the project
   * @type {string}
   * @example 'Logo Design'
   */
  label?: string;

  /**
   * The variant of the label
   * @type {BadgeProps['variant']}
   * @default 'primary'
   * @example 'primary'
   */
  labelVariant?: BadgeProps['variant'];

  /**
   * The class name of the label
   * @type {string}
   * @default ''
   * @example 'text-white'
   */
  labelClassName?: string;
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
  const projectChunks =
    useMemo(() => {
      return projects?.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 3);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, [] as Project[][]);
    }, [projects]) ?? [];
  const maxIndex = projectChunks?.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="mb-8">{description}</p>
      <Carousel
        selectedItem={activeIndex}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {projectChunks?.map((project, index) => {
          return (
            <div className="grid gap-8 grid-cols-3" key={index}>
              {project?.map((project, index) => (
                <Card className="text-left" key={index}>
                  <img className="rounded-md" src={project.image} alt={project.title} />
                  {project.label && (
                    <div className="mt-2">
                      <Badge className={project.labelClassName} variant={project.labelVariant}>
                        {project.label}
                      </Badge>
                    </div>
                  )}
                  <p className="text-lg font-semibold my-2">{project.title}</p>
                  <p className="text-gray-500">{project.description}</p>
                </Card>
              ))}
            </div>
          );
        })}
      </Carousel>
      {maxIndex > 0 && (
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div
            className={classNames('text-2xl cursor-pointer', {
              'opacity-50': activeIndex === 0,
              'text-primary': activeIndex !== 0,
            })}
            onClick={() =>
              setActiveIndex((index) => {
                return index - 1 < 0 ? index : index - 1;
              })
            }
          >
            ←
          </div>
          <div
            className={classNames('text-2xl cursor-pointer', {
              'opacity-50': activeIndex === maxIndex,
              'text-primary': activeIndex !== maxIndex,
            })}
            onClick={() =>
              setActiveIndex((index) => {
                return index + 1 > maxIndex ? index : index + 1;
              })
            }
          >
            →
          </div>
        </div>
      )}
    </div>
  );
};
