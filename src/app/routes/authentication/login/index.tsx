import { Submit } from '../../../../components/buttons/submit';
import { z } from 'zod';
import { loginSchema } from '@/schemas';
import { useSignInEmailPassword } from '@nhost/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormElement } from '@/components/form-item';
import { Form } from '@/components/ui/form';
import { useNavigate } from 'react-router-dom';
import { useSignal } from '@preact/signals-react';
export const Login = () => {
  const navigate = useNavigate();

  const { signInEmailPassword, isLoading, needsEmailVerification } = useSignInEmailPassword();
  const errorMessage = useSignal('');
  const errorStatus = useSignal(0);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const { isSuccess, isError, error } = await signInEmailPassword(
        values.email,
        values.password
      );

      if (isSuccess && !isError) {
        navigate('/', { replace: true });
      } else {
        if (error) {
          errorMessage.value = error.message;
          errorStatus.value = error.status;
        } else {
          errorMessage.value = 'Something went wrong';
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  const disableForm = false;
  // const disableForm = isLoading || needsEmailVerification;
  return (
    <>
      <h1 className="text-center text-2xl font-bold">{'Sign in to your account'}</h1>
      {needsEmailVerification ? (
        <>
          <br />
          <div>
            <p className="text-center">
              Please check your mailbox and follow the verification link to verify your email.
            </p>
            <br />
            <div className="text-center">
              <a href="/auth/login" className=" text-link">
                Try Again
              </a>
            </div>
          </div>
        </>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormElement
              control={form.control}
              name="email"
              label="Email"
              disabled={isLoading ? disableForm : false}
              description="Enter your preffered email"
            />
            <FormElement
              control={form.control}
              name="password"
              label="Password"
              disabled={isLoading ? disableForm : false}
              type="password"
              description="Enter your password."
            />
            <div className="text-center">
              <a className="text-main text-informational" href="/auth/forgot-password">
                Forgot Password?
              </a>
            </div>
            <Submit title="Login" disabled={isLoading ? disableForm : false} />
            <div className="text-center">
              <span className="text-main text-informational">
                Don't have an account yet?
                <a href="/auth/register" className="text-link">
                  &nbsp;Click here
                </a>
              </span>
            </div>
            <p className="text-error text-informational text-center">{errorMessage}</p>
            {errorStatus.value === 20 ? (
              <div className="text-center">
                <a className="text-link text-informational" href="/app">
                  Go to dashboard
                </a>
              </div>
            ) : null}
          </form>
        </Form>
      )}
    </>
  );
};
