import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';
import { ContactForm, ContactFormProps } from '../contact-form';

export interface ContactType1Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * The title of the contact form.
   * @type {string}
   * @default 'Contact Us'
   * @required
   */
  title: string;

  /**
   * The description of the contact form.
   * @type {string}
   * @default 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
   * @required
   */
  description: string;

  /**
   * The props of the contact form.
   * @type {Partial<ContactFormProps>}
   * @default undefined
   */
  formProps?: Partial<ContactFormProps>;
}

/**
 * A simple contact form with title and description.
 */
export const ContactType1 = forwardRef<HTMLDivElement, ContactType1Props>(
  ({ title, description, className, formProps = {}, ...props }, ref) => {
    return (
      <div ref={ref} className={classNames('container mx-auto', className)} {...props}>
        <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
        <p className="lg:w-1/2 mx-auto mb-12 text-center">{description}</p>
        <div className="lg:w-1/2 mx-auto">
          <ContactForm {...formProps} ref={null} />
        </div>
      </div>
    );
  },
);

ContactType1.displayName = 'FeatureType1';
