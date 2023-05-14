import { forwardRef, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, TextInputProps } from '../text-input';
import { Card } from '../card';
import { Button, ButtonProps } from '../button';
import classNames from 'classnames';
import * as zod from 'zod';

export type RegisterFormSubmitResult = {
  status: 'success' | 'error';
  message?: string;
};
export type RegisterFormSubmitHandler = (data: {
  email: string;
  password: string;
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
   * The register form submit handler
   *
   * @type RegisterFormSubmitHandler
   * @returns
   */
  onSubmit?: RegisterFormSubmitHandler;
}

type Inputs = {
  email: string;
  password: string;
};

/**
 * An uncontrolled register form to let users to create an account.
 * It contains email and password inputs and a submit button.
 */
export const RegisterForm = forwardRef<HTMLFormElement, RegisterFormProps>(
  ({ title, description, inputProps: inputConfig, onSubmit, ...props }, ref) => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const schema = useMemo(() => {
      return zod.object({
        email: zod.string().email('Please enter a valid email address'),
        password: zod.string().refine((value) => {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        }, 'Password should consist of at least 8 characters, one uppercase, one lowercase, one number and one special character'),
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
      <Card className="max-w-[375px] mx-auto">
        <div className="flex flex-col items-center space-y-2 pb-8">
          <p className="text-center text-xl font-semibold">{title ?? 'Welcome'}</p>
          <p className="text-sm">{description ?? 'Create an account to continue'}</p>
        </div>
        {status && (
          <div
            className="bg-danger5 bg-red-50 border border-danger100 text-danger100 px-4 py-3 rounded mb-4 text-sm"
            role="alert"
          >
            <span>{status}</span>
          </div>
        )}
        <form ref={ref} {...props}>
          <TextInput
            {...inputConfig?.email}
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
    );
  },
);

RegisterForm.displayName = 'RegisterForm';
