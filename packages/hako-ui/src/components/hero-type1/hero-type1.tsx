import { MouseEventHandler, ReactNode, forwardRef } from 'react';
import { Button } from '../button';
import { Hero, HeroProps } from '../hero/hero';
import classNames from 'classnames';

export interface HeroType1PropsImage {
  /**
   * Image source
   * @type string
   * @example './images/people1.webp'
   * @required
   */
  src: string;

  /**
   * Image source set
   * @type string
   * @example './images/people1.webp 1x'
   * @default undefined
   */
  srcSet?: string;

  /**
   * Image alt
   * @type string
   * @example 'hero-image'
   * @default undefined
   */
  alt?: string;

  /**
   * Image width
   * @type number
   * @example 500
   * @default undefined
   */
  width?: number;

  /**
   * Image height
   * @type number
   * @example 500
   * @default undefined
   */
  height?: number;
}

export interface HeroType1Props extends HeroProps {
  /**
   * Title of the hero
   * @type string
   * @example 'The Best React UI Library for Developers'
   * @required
   */
  title: string;

  /**
   * Subtitle of the hero
   * @type string
   * @example 'A Professional Freelance Web Developer'
   * @required
   */
  subtitle?: string;

  /**
   * Description of the hero
   * @type string
   * @example 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   * @required
   */
  description: string;

  /**
   * CTA text of the hero
   * @type string
   * @example 'Get Started'
   * @required
   */
  ctaText: ReactNode;

  /**
   * CTA click handler
   * @type MouseEventHandler<HTMLButtonElement>
   * @example () => {}
   * @default undefined
   */
  onCTAClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * CTA2 text of the hero, if not provided, CTA2 will not be rendered
   * @type string
   * @example 'Learn more →'
   * @default undefined
   */
  cta2Text?: ReactNode;

  /**
   * CTA2 click handler
   * @type MouseEventHandler<HTMLButtonElement>
   * @example () => {}
   * @default undefined
   */
  onCTA2Click?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Image of the hero
   * @type HeroType1PropsImage
   * @example { src: './images/people1.webp' }
   * @default undefined
   */
  image?: HeroType1PropsImage;
}

export const HeroType1 = forwardRef<HTMLElement, HeroType1Props>(
  ({ title, subtitle, description, ctaText, cta2Text, onCTA2Click, onCTAClick, className, image, ...props }, ref) => {
    return (
      <Hero {...props} className={classNames('flex-col space-y-8 lg:space-y-0 lg:flex-row', className)} ref={ref}>
        <div className="flex flex-1 items-center justify-center">
          <div
            className={classNames('lg:w-2/3', {
              'text-center': !image,
            })}
          >
            <p className="text-5xl font-bold mb-4">{title}</p>
            {subtitle && <p className="text-2xl font-medium text-primary mb-4">{subtitle}</p>}
            <p className="mb-9">{description}</p>
            <div
              className={classNames('flex items-center space-x-4', {
                'justify-center': !image,
              })}
            >
              <Button onClick={onCTAClick}>{ctaText}</Button>
              {cta2Text && (
                <Button onClick={onCTA2Click} variant="text-default">
                  {cta2Text}
                </Button>
              )}
            </div>
          </div>
        </div>
        {image && (
          <div className="flex justify-center flex-1">
            <img src={image.src} srcSet={image.srcSet} alt={image.alt} width={image.width} height={image.height} />
          </div>
        )}
      </Hero>
    );
  },
);
HeroType1.displayName = 'HeroType1';
