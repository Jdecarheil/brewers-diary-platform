'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { FormElement } from '@/components/form-item';
import { useSignal } from '@preact/signals-react';
import { useSignInEmailPassword } from '@nhost/react';
import { useNavigate } from 'react-router-dom';
import { formSchema } from '@/schemas';

export const RegisterForm = () => {
  const { signInEmailPassword, needsEmailVerification, isLoading, isSuccess, isError, error } =
    useSignInEmailPassword();

  const errortext = useSignal('');
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await signInEmailPassword(values.username, values.password);

    if (!result.isSuccess) {
      if (result.error?.message) {
        errortext.value = result.error.message;
        console.log(errortext.value);
      } else {
        errortext.value = 'Something went wrong';
      }
    } else {
      errortext.value = '';
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="text-center text-2xl font-bold">Create a new account</h1>
        <FormElement
          control={form.control}
          name="username"
          label="Username"
          description="This is your public display name."
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
          label="Password"
          description="Enter your password."
        />
        <FormElement
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          description="Confirm your password."
        />
        <Button
          variant={'default'}
          className="bg-main-primary w-full"
          style={{ maxWidth: '100%' }}
          size={'default'}
          type="submit"
        >
          Create Account
        </Button>
        <div className="text-center">
          <a className="color-main-primary text-informational" href="/auth/login">
            Back to login
          </a>
        </div>
        <p className="color-main-error text-informational text-center">{errortext.value}</p>
      </form>
    </Form>
  );
};
