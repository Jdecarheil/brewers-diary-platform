import { z } from 'zod';
import { loginSchema } from '@/schemas';
import { useSignal } from '@preact/signals-react';
import { useSignInEmailPassword } from '@nhost/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormElement } from '@/components/form-item';
import logo from '@/assets/title.avif';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { signInEmailPassword } = useSignInEmailPassword();
  const errortext = useSignal('');
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const { error } = await signInEmailPassword(values.email, values.password);
      if (error) {
        console.log(error);
        errortext.value = error.message;
      } else {
        navigate('/app', { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/3 m-auto">
        <img className="self-auto w-full mb-8" src={logo} />
        <h1 className="text-center text-2xl font-bold">{'Sign in to your account'}</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormElement
              control={form.control}
              name="email"
              label="Email"
              description="Enter your preffered email"
            />
            <FormElement
              control={form.control}
              name="password"
              label="Password"
              type="password"
              description="Enter your password."
            />
            <div className="text-center">
              <a className="text-main text-informational" href="/auth/forgot-password">
                Forgot Password?
              </a>
            </div>
            <Button variant={'default'} className="bg-main w-full" size={'default'} type="submit">
              Login
            </Button>
            <div className="text-center">
              <span className="text-main text-informational">
                Don't have an account yet?
                <a href="/auth/register" className="text-link">
                  &nbsp;Click here
                </a>
              </span>
            </div>
            <p className="text-error text-informational text-center">{errortext.value}</p>
          </form>
        </Form>
      </div>
    </div>
  );
};
