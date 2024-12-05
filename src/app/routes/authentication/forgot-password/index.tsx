import { z } from 'zod';
import { emailSchema, resetSchema } from '@/schemas';
import { useSignal } from '@preact/signals-react';
import { useResetPassword } from '@nhost/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import logo from '@/assets/title.avif';
import { FormElement } from '@/components/form-item';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useNavigate } from 'react-router-dom';

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
    <div className="flex h-screen">
      <div className="w-1/3 m-auto">
        <img className="self-auto w-full mb-8" src={logo} />
        <h1 className="text-center text-2xl font-bold">Recover your account</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormElement
              control={form.control}
              name="email"
              label="Email"
              description="Enter your preffered email"
            />
            <Button
              variant={'default'}
              className="bg-main w-full"
              style={{ maxWidth: '100%' }}
              size={'default'}
              type="submit"
            >
              Recover Password
            </Button>
            <div className="text-center">
              <a className="text-informational" href="/auth/login">
                Back to login
              </a>
            </div>
            <p className="text-informational text-center">{errortext.value}</p>
          </form>
        </Form>
      </div>
    </div>
  );
};
