import { forwardRef, MouseEventHandler, useMemo, useState } from 'react';
import { TextInput, TextInputProps } from '../text-input';
import { Card } from '../card';
import { Button, ButtonProps } from '../button';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert } from '../alert';

export type LoginFormSubmitResult = {
  status: 'success' | 'error';
  message?: string;
};

const DomainAndorment = () => {
  return <p className="h-full flex items-center">.engagely.com</p>;
};

export type LoginFormSubmitHandler = (data: {
  subdomain: string;
  email: string;
  password: string;
}) => Promise<LoginFormSubmitResult> | LoginFormSubmitResult;

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
     * The configuration for the subdomain input.
     */
    subdomain?: Partial<TextInputProps>;

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

  /**
   * The hint to let users know they can create an account if they don't have one.
   * @type string
   * @default 'Don't have an account yet?'
   * @example 'Don't have an account yet?'
   */
  registerHint?: string;

  /**
   * The text for the register link.
   * @type string
   * @default 'Sign up'
   * @example 'Sign up'
   */
  registerText?: string;

  /**
   * The link to the register page.
   * @type string
   * @example '/register'
   * @default '/register'
   */
  registerLink?: string;

  /**
   * The handler to be called when the register link is clicked.
   * @type MouseEventHandler<HTMLSpanElement>
   * @example () => console.log('Register link clicked')
   * @default undefined
   */
  onRegisterClick?: MouseEventHandler<HTMLSpanElement>;
}

type Inputs = {
  subdomain: string;
  email: string;
  password: string;
};

/**
 * An uncontrolled login form to let users to login.
 * It contains email and password inputs and a submit button.
 */
export const LoginForm = forwardRef<HTMLFormElement, LoginFormProps>(
  (
    {
      title,
      description,
      inputProps: inputConfig,
      onSubmit,
      registerHint = "Don't have an account yet?",
      registerText = 'Sign up now',
      registerLink = '/register',
      onRegisterClick,
      ...props
    },
    ref,
  ) => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const schema = useMemo(() => {
      return zod.object({
        email: zod.string().trim().email('Please enter a valid email address'),
        password: zod.string().trim(),
        subdomain: zod.string().trim(),
      });
    }, []);
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm<Inputs>({
      resolver: zodResolver(schema),
    });
    const submit = handleSubmit(async (data) => {
      try {
        setLoading(true);
        const result = await onSubmit?.(data);
        if (result && result.status === 'error') {
          setStatus(result?.message ?? '');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    });

    return (
      <div className="max-w-[375px] w-full mx-2 md:mx-auto">
        <Card className="mb-2">
          <div className="flex flex-col items-center space-y-2 pb-8">
            <p className="text-center text-xl font-semibold">{title ?? 'Welcome'}</p>
            <p className="text-sm">{description ?? 'Log in to continue'}</p>
          </div>
          {status && <Alert>{status}</Alert>}
          <form ref={ref} {...props}>
            <TextInput
              {...inputConfig?.subdomain}
              disabled={loading || inputConfig?.subdomain?.disabled}
              placeholder={inputConfig?.subdomain?.placeholder ?? 'Please enter your subdomain'}
              label={inputConfig?.subdomain?.label ?? 'Your organization URL'}
              required={inputConfig?.subdomain?.required ?? true}
              hint={errors.subdomain?.message}
              status={errors.subdomain ? 'error' : 'default'}
              andorment={<DomainAndorment />}
              {...register('subdomain')}
            />
            <TextInput
              {...inputConfig?.email}
              autoComplete="email"
              disabled={loading || inputConfig?.email?.disabled}
              placeholder={inputConfig?.email?.placeholder ?? 'Please enter your email address'}
              label={inputConfig?.email?.label ?? 'Email address'}
              required={inputConfig?.email?.required ?? true}
              hint={errors.email?.message}
              status={errors.email ? 'error' : 'default'}
              {...register('email')}
            />
            <TextInput
              {...inputConfig?.password}
              type="password"
              autoComplete="current-password"
              disabled={loading || inputConfig?.password?.disabled}
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
              disabled={loading || inputConfig?.submit?.disabled}
              onClick={submit}
              className={classNames(inputConfig?.submit?.className, 'mt-2 w-full')}
            >
              {inputConfig?.submit?.children ?? 'Continue'}
            </Button>
          </form>
        </Card>
        <p className="text-sm">
          {registerHint}
          <a className="ml-2 text-primary cursor-pointer font-semibold" href={registerLink} onClick={onRegisterClick}>
            {registerText}
          </a>
        </p>
      </div>
    );
  },
);

LoginForm.displayName = 'LoginForm';
