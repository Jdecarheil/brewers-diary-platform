import { z } from 'zod';

const feedback = {
  passwordMin: 'Password must be more than 8 characters',
  passwordMax: 'Password cannot be longer than 15 characters',
};

export const formSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: 'Usernames are not less than 4 characters',
    })
    .max(15, {
      message: 'Usernames are not more than 15 characters',
    }),
  password: z
    .string()
    .min(8, {
      message: feedback.passwordMin,
    })
    .max(15, {
      message: feedback.passwordMax,
    }),
  confirmPassword: z
    .string()
    .min(8, {
      message: feedback.passwordMin,
    })
    .max(15, {
      message: feedback.passwordMax,
    }),
  email: z.string().email(),
});
