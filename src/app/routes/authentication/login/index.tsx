import { Submit } from '@/components/buttons/submit';
import { FormElement } from '@/components/form-item';
import { Form } from '@/components/ui/form';

import { loginWithEmailAndPassword } from '@/lib/auth';
import { loginSchema } from '@/schemas/forms';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignal } from '@preact/signals-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import type { z } from 'zod';

const Login = () => {
  const navigate = useNavigate();
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
      const response = await loginWithEmailAndPassword(values.email, values.password);

      if (response) {
        navigate('/app', {
          replace: true,
        });
      } else {
        errorMessage.value =
          'Something went wrong, you may have entered invalid credentials or not yet verified your email';
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold">{'Sign in to your account'}</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormElement
            control={form.control}
            name="email"
            label="Email"
            disabled={false}
            description="Enter your preffered email"
          />
          <FormElement
            control={form.control}
            name="password"
            label="Password"
            disabled={false}
            type="password"
            description="Enter your password."
          />
          <div className="text-center">
            <a className="text-main text-informational" href="/auth/forgot-password">
              Forgot Password?
            </a>
          </div>
          <Submit title="Login" disabled={false} />
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
      {/* )} */}
    </>
  );
};

export default Login;
