import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames';
import { useState } from 'react';

export interface Testimonial {
  /**
   * The avatar of the testimonial
   * @type {string}
   * @example 'https://www.google.com/image.png'
   * @required
   */
  avatarUrl: string;

  /**
   * The name of the testimonial
   * @type {string}
   * @example 'Sarah Connor'
   * @required
   */
  name: string;

  /**
   * The designation of the testimonial
   * @type {string}
   * @example 'CEO at Skynet Resistance Ltd'
   * @required
   */
  designation: string;

  /**
   * The message of the testimonial
   * @type {string}
   * @example 'Hako UI is the best UI kit I have ever used. I love it!'
   * @required
   */
  message: string;
}

export interface TestimonialType1Props {
  /**
   * The title of the testimonial
   * @type {string}
   * @example 'Testimonials'
   * @required
   */
  title: string;

  /**
   * The description of the testimonial
   * @type {string}
   * @example 'What our customers are saying'
   * @required
   */
  description: string;

  /**
   * The list of testimonials
   * @type {Testimonial[]}
   * @default []
   */
  testimonials?: Testimonial[];
}

/**
 * Tell your customers what they are saying about your product or service with this testimonial component.
 * The testimonial component consists of a title, description, and a list of testimonials.
 * Each testimonial consists of an avatar, name, designation, and a message.
 * If there are more than one testimonials, it will be displayed in a carousel.
 */
export const TestimonialType1 = ({ title, description, testimonials = [] }: TestimonialType1Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = testimonials.length - 1;

  return (
    <div className="flex flex-col items-center container mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
      <p className="lg:w-1/2 mx-auto mb-12 text-center">{description}</p>
      <Carousel
        className="lg:w-2/5"
        selectedItem={activeIndex}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {testimonials.map((testimonial) => (
          <div key={activeIndex}>
            <img className="rounded-full !h-[80px] !w-[80px]" src={testimonial.avatarUrl} alt={testimonial.name} />
            <h3 className="font-semibold my-2">{testimonial.name}</h3>
            <h3 className="text-sm my-2">{testimonial.designation}</h3>
            <p className="text-gray-500">{`"${testimonial.message}"`}</p>
          </div>
        ))}
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
