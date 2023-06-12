import { forwardRef, MouseEventHandler, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, TextInputProps } from '../text-input';
import { Card } from '../card';
import { Button, ButtonProps } from '../button';
import classNames from 'classnames';
import * as zod from 'zod';

export type RegisterFormExtraFields = 'FirstLastName' | 'FullName';

export type RegisterFormSubmitResult = {
  status: 'success' | 'error';
  message?: string;
};
export type RegisterFormSubmitHandler = (data: {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
}) => Promise<RegisterFormSubmitResult> | RegisterFormSubmitResult;

export interface RegisterFormProps extends Omit<React.HTMLProps<HTMLFormElement>, 'onSubmit'> {
  /**
   * Title of the register form
   * @type string
   * @default 'Welcome'
   */
  title?: string;

  /**
   * Description of the register form
   * @type string
   * @default 'Create an account to continue'
   */
  description?: string;

  /**
   * The configuration for the input fields.
   */
  inputProps?: {
    /**
     * The configuration for the first name input.
     * @type Partial<TextInputProps>
     * @default undefined
     */
    firstName?: Partial<TextInputProps>;

    /**
     * The configuration for the last name input.
     * @type Partial<TextInputProps>
     * @default undefined
     */
    lastName?: Partial<TextInputProps>;

    /**
     * The configuration for the full name input.
     * @type Partial<TextInputProps>
     * @default undefined
     */
    fullName?: Partial<TextInputProps>;

    /**
     * The configuration for the email input.
     * @type Partial<TextInputProps>
     * @default undefined
     */
    email?: Partial<TextInputProps>;

    /**
     * The configuration for the password input.
     * @type Partial<TextInputProps>
     * @default undefined
     */
    password?: Partial<TextInputProps>;

    /**
     * The configuration for the submit button.
     * @type Partial<TextInputProps>
     * @default undefined
     */
    submit?: Partial<ButtonProps>;
  };

  /**
   * The register form submit handler
   *
   * @type RegisterFormSubmitHandler
   * @returns
   */
  onSubmit?: RegisterFormSubmitHandler;

  /**
   * The hint to let users know they can login instead of registering.
   * @type string
   * @default 'Already have an account?'
   * @example 'Already have an account?'
   */
  loginHint?: string;

  /**
   * The text for the login link.
   * @type string
   * @default 'Login here'
   * @example 'Login here'
   */
  loginText?: string;

  /**
   * The link to the login page.
   * @type string
   * @example '/login'
   * @default '/login'
   */
  loginLink?: string;

  /**
   * The handler to be called when the login link is clicked.
   * @type MouseEventHandler<HTMLSpanElement>
   * @example () => console.log('Login link clicked')
   * @default undefined
   */
  onLoginClick?: MouseEventHandler<HTMLSpanElement>;

  /**
   * The extra fields to be included in the register form.
   * @type RegisterFormExtraFields[]
   * @example ['FirstLastName']
   * @default []
   */
  extraFields?: RegisterFormExtraFields[];
}

type Inputs = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
};

/**
 * An uncontrolled register form to let users to create an account.
 * It contains email and password inputs and a submit button.
 */
export const RegisterForm = forwardRef<HTMLFormElement, RegisterFormProps>(
  (
    {
      title,
      description,
      inputProps: inputConfig,
      onSubmit,
      loginHint = 'Already have an account?',
      loginText = 'Login here',
      onLoginClick,
      loginLink = '/login',
      extraFields = [],
      ...props
    },
    ref,
  ) => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const schema = useMemo(() => {
      const schema = zod.object({
        email: zod.string().trim().email('Please enter a valid email address'),
        password: zod
          .string()
          .trim()
          .refine((value) => {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
          }, 'Password should consist of at least 8 characters, one uppercase, one lowercase, one number and one special character'),
      });

      if (extraFields.includes('FirstLastName')) {
        return schema.extend({
          firstName: zod.string().nonempty('Please enter your first name'),
          lastName: zod.string().nonempty('Please enter your last name'),
        });
      }

      if (extraFields.includes('FullName')) {
        return schema.extend({
          fullName: zod.string().nonempty('Please enter your full name'),
        });
      }

      return schema;
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
            <p className="text-sm">{description ?? 'Create an account to continue'}</p>
          </div>
          {status && (
            <div
              className="bg-danger5 bg-red-50 border border-danger100 text-danger100 px-4 py-3 hk-rounded mb-4 text-sm"
              role="alert"
            >
              <span>{status}</span>
            </div>
          )}
          <form ref={ref} {...props}>
            {extraFields.includes('FirstLastName') && (
              <>
                <TextInput
                  {...inputConfig?.firstName}
                  autoComplete="given-name"
                  disabled={loading || inputConfig?.firstName?.disabled}
                  placeholder={inputConfig?.firstName?.placeholder ?? 'Please enter your first name'}
                  label={inputConfig?.firstName?.label ?? 'First name'}
                  required={inputConfig?.firstName?.required ?? true}
                  hint={errors.firstName?.message}
                  status={errors.firstName ? 'error' : 'default'}
                  {...register('firstName')}
                />
                <TextInput
                  {...inputConfig?.lastName}
                  autoComplete="family-name"
                  disabled={loading || inputConfig?.lastName?.disabled}
                  placeholder={inputConfig?.lastName?.placeholder ?? 'Please enter your last name'}
                  label={inputConfig?.lastName?.label ?? 'Last name'}
                  required={inputConfig?.lastName?.required ?? true}
                  hint={errors.lastName?.message}
                  status={errors.lastName ? 'error' : 'default'}
                  {...register('lastName')}
                />
              </>
            )}
            {extraFields.includes('FullName') && (
              <TextInput
                {...inputConfig?.fullName}
                autoComplete="name"
                disabled={loading || inputConfig?.fullName?.disabled}
                placeholder={inputConfig?.fullName?.placeholder ?? 'Please enter your full name'}
                label={inputConfig?.fullName?.label ?? 'Full name'}
                required={inputConfig?.fullName?.required ?? true}
                hint={errors.fullName?.message}
                status={errors.fullName ? 'error' : 'default'}
                {...register('fullName')}
              />
            )}
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
              autoComplete="new-password"
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
              {inputConfig?.submit?.children ?? 'Create account'}
            </Button>
          </form>
        </Card>
        <p className="text-sm">
          {loginHint}
          <a className="ml-2 text-primary cursor-pointer font-semibold" href={loginLink} onClick={onLoginClick}>
            {loginText}
          </a>
        </p>
      </div>
    );
  },
);

RegisterForm.displayName = 'RegisterForm';
