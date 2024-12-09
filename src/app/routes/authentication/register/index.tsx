import { z } from 'zod';
import { registerSchema } from '@/schemas';
import { useSignUpEmailPassword } from '@nhost/react';
import { useSignal } from '@preact/signals-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormElement } from '@/components/form-item';
import { Form } from '@/components/ui/form';
import { useNavigate } from 'react-router-dom';
import { Submit } from '@/components/buttons/submit';

export const Register = () => {
  const errortext = useSignal('');
  const { signUpEmailPassword } = useSignUpEmailPassword();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      const { error } = await signUpEmailPassword(values.email, values.password);

      if (!error) {
        navigate('/auth/login', { replace: true });
      } else {
        errortext.value = error.message;
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
            name="username"
            label="Username"
            description="This is your display name"
          />
          <FormElement
            control={form.control}
            name="email"
            label="Email"
            description="Enter your preffered email"
          />
          <FormElement
            control={form.control}
            name="password"
            type="password"
            label="Password"
            description="Enter your password."
          />
          <FormElement
            control={form.control}
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            description="Confirm your password."
          />
          <Submit title="Create Account" disabled={false} />
          <div className="text-center">
            <a className="color-main-primary text-informational" href="/auth/login">
              Back to login
            </a>
          </div>
          <p className="color-error-primary text-informational text-center">{errortext.value}</p>
        </form>
      </Form>
    </>
  );
};
