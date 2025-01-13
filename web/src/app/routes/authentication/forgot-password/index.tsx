import { resetSchema } from '@/schemas/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useSignal } from '@preact/signals-react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { useAuth } from '@/app/providers/auth';
import { Submit } from '@/components/buttons/submit';
import { FormElement } from '@/components/form-item';
import { Form } from '@/components/ui/form';


const ForgotPassword = () => {
  const errorText = useSignal('');
  const emailSent = useSignal(false);
  const { forgotPassword } = useAuth();
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof resetSchema>) {
    const result = await forgotPassword(values.email);
    if (result) {
      emailSent.value = true;
    } else {
      errorText.value = 'Your email could not be verified';
    }
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold">Recover your account</h1>
      {!emailSent.value ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormElement
              control={form.control}
              name="email"
              label="Email"
              description="Enter your preffered email"
            />
            <Submit title="Recover Account" disabled={false} />

            <p className="text-error text-center text-informational">{errorText.value}</p>
          </form>
        </Form>
      ) : (
        <div className="text-informational text-main text-center mt-10">
          <p>Check your email for a link to reset</p>
        </div>
      )}
      <div className="text-center">
        <a className="text-informational mt-5" href="/auth/login">
          Back to login
        </a>
      </div>
    </>
  );
};

export default ForgotPassword;
