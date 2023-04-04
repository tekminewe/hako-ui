import { forwardRef } from 'react';
import { TextInput, TextInputProps } from '../text-input';
import { TextArea, TextAreaProps } from '../text-area';
import { Card } from '../card';
import { Button, ButtonProps } from '../button';
import classNames from 'classnames';

export interface ContactFormProps extends React.HTMLProps<HTMLFormElement> {
  /**
   * The configuration for the input fields.
   */
  inputConfig?: {
    /**
     * The configuration for the name input.
     */
    name?: Partial<TextInputProps>;

    /**
     * The configuration for the email input.
     */
    email?: Partial<TextInputProps>;

    /**
     * The configuration for the message input.
     */
    message?: Partial<TextAreaProps>;

    /**
     * The configuration for the submit button.
     */
    submit?: Partial<ButtonProps>;
  };
}

/**
 * An uncontrolled contact form to let users send you messages.
 * It contains name, email and message inputs and a submit button.
 */
export const ContactForm = forwardRef<HTMLFormElement, ContactFormProps>(({ inputConfig, ...props }, ref) => {
  return (
    <Card>
      <form ref={ref} {...props}>
        <TextInput
          {...inputConfig?.name}
          placeholder={inputConfig?.name?.placeholder ?? 'Please enter your name'}
          label={inputConfig?.name?.label ?? 'Name'}
          required={inputConfig?.name?.required ?? true}
          ref={null}
        />
        <TextInput
          {...inputConfig?.email}
          placeholder={inputConfig?.email?.placeholder ?? 'Please enter your email address'}
          label={inputConfig?.email?.label ?? 'Email address'}
          required={inputConfig?.email?.required ?? true}
          ref={null}
        />
        <TextArea
          {...inputConfig?.message}
          placeholder={inputConfig?.message?.placeholder ?? 'Please enter your message'}
          label={inputConfig?.message?.label ?? 'Message'}
          required={inputConfig?.message?.required ?? true}
          ref={null}
        />
        <Button
          type="submit"
          {...inputConfig?.submit}
          className={classNames(inputConfig?.submit?.className, 'mt-2 w-full md:w-fit')}
        >
          {inputConfig?.submit?.children ?? 'Send message'}
        </Button>
      </form>
    </Card>
  );
});

ContactForm.displayName = 'ContactForm';
