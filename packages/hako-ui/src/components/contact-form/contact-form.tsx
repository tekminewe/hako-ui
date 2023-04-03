import { forwardRef } from 'react';

export interface ContactFormProps extends React.HTMLProps<HTMLDivElement> {
  rules?: string;
}

export const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>((props, ref) => {
  return <div ref={ref} />;
});

ContactForm.displayName = 'ContactForm';
