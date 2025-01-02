import { Submit } from '@/components/buttons/submit';
import { FormElement } from '@/components/form-item';
import { Form } from '@/components/ui/form';
import { loginWithEmailAndPassword } from '@/lib/api/auth';
import { loginSchema } from '@/schemas/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignal } from '@preact/signals-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import type { z } from 'zod';

export const NewAdditive = () => {
  const navigate = useNavigate();
  const errorMessage = useSignal('');

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const res = await loginWithEmailAndPassword(values.email, values.password);

      if (res) {
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
    <div className="flex-1 justify-center items-center w-4/5 border rounded-xl">
      <h1 className="text-center text-2xl font-bold">{'Add Recipe'}</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-2">
              <FormElement
                control={form.control}
                name="name"
                label="Recipe Name"
                disabled={false}
                description="Enter your preferred email"
              />
              <FormElement
                control={form.control}
                name="author"
                label="Author"
                disabled={false}
                type="password"
                description="Enter your password."
              />
            </div>

            <Submit title="Login" disabled={false} />
          </div>
        </form>
      </Form>
    </div>
  );
};
