import { forwardRef, useMemo } from 'react';
import { TextInput, TextInputProps } from '../text-input';
import { Card } from '../card';
import { Button, ButtonProps } from '../button';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export type LoginFormSubmitHandler = (data: { email: string; password: string }) => Promise<void> | void;

export interface LoginFormProps extends Omit<React.HTMLProps<HTMLFormElement>, 'onSubmit'> {
  /**
   * Title of the login form
   * @type string
   * @default 'Welcome'
   */
  title?: string;

  /**
   * Description of the login form
   * @type string
   * @default 'Log in to continue'
   */
  description?: string;

  /**
   * The configuration for the input fields.
   */
  inputProps?: {
    /**
     * The configuration for the email input.
     */
    email?: Partial<TextInputProps>;

    /**
     * The configuration for the password input.
     */
    password?: Partial<TextInputProps>;

    /**
     * The configuration for the submit button.
     */
    submit?: Partial<ButtonProps>;
  };

  /**
   * The login form submit handler
   *
   * @type RegisterFormSubmitHandler
   * @returns
   */
  onSubmit?: LoginFormSubmitHandler;
}

type Inputs = {
  email: string;
  password: string;
};

/**
 * An uncontrolled login form to let users to login.
 * It contains email and password inputs and a submit button.
 */
export const LoginForm = forwardRef<HTMLFormElement, LoginFormProps>(
  ({ title, description, inputProps: inputConfig, onSubmit, ...props }, ref) => {
    const schema = useMemo(() => {
      return zod.object({
        email: zod.string().email('Please enter a valid email address'),
        password: zod.string(),
      });
    }, []);
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm<Inputs>({
      resolver: zodResolver(schema),
    });
    const submit = handleSubmit((data) => {
      onSubmit?.(data);
    });

    return (
      <Card>
        <div className="flex flex-col items-center space-y-2 pb-8">
          <p className="text-center text-xl font-semibold">{title ?? 'Welcome'}</p>
          <p className="text-sm">{description ?? 'Log in to continue'}</p>
        </div>
        <form ref={ref} {...props}>
          <TextInput
            {...inputConfig?.email}
            placeholder={inputConfig?.email?.placeholder ?? 'Please enter your email address'}
            label={inputConfig?.email?.label ?? 'Email address'}
            required={inputConfig?.email?.required ?? true}
            hint={errors.email?.message}
            status={errors.email ? 'error' : 'default'}
            {...register('email')}
          />
          <TextInput
            {...inputConfig?.password}
            placeholder={inputConfig?.password?.placeholder ?? 'Please enter your password'}
            label={inputConfig?.password?.label ?? 'Password'}
            required={inputConfig?.password?.required ?? true}
            hint={errors.password?.message}
            status={errors.password ? 'error' : 'default'}
            {...register('password')}
          />
          <Button
            {...inputConfig?.submit}
            type="submit"
            onClick={submit}
            className={classNames(inputConfig?.submit?.className, 'mt-2 w-full md:w-fit')}
          >
            {inputConfig?.submit?.children ?? 'Continue'}
          </Button>
        </form>
      </Card>
    );
  },
);

LoginForm.displayName = 'LoginForm';
