import { z } from 'zod';
import { resetSchema } from '@/schemas';
import { useSignal } from '@preact/signals-react';
import { useResetPassword } from '@nhost/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormElement } from '@/components/form-item';
import { Form } from '@/components/ui/form';
import { useNavigate } from 'react-router-dom';
import { Submit } from '@/components/buttons/submit';

export const ForgotPassword = () => {
  const { resetPassword } = useResetPassword();
  const errortext = useSignal('');
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof resetSchema>) {
    try {
      const { error } = await resetPassword(values.email);

      if (error) {
        errortext.value = error.message;
      } else {
        navigate('/auth/login', { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold">Recover your account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormElement
            control={form.control}
            name="email"
            label="Email"
            description="Enter your preffered email"
          />
          <Submit title="Recover Account" disabled={false} />
          <div className="text-center">
            <a className="text-informational" href="/auth/login">
              Back to login
            </a>
          </div>
          <p className="text-informational text-center">{errortext.value}</p>
        </form>
      </Form>
    </>
  );
};
