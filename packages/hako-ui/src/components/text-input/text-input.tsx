import { forwardRef } from 'react';

export const TextInput = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>((props, ref) => {
  return <input ref={ref} {...props} />;
});

TextInput.displayName = 'TextInput';
