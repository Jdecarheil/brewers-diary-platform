import { loginSchema, registerSchema } from '@/schemas/form';
import { z } from 'zod';

export type RegisterProps = z.infer<typeof registerSchema>;
export type LoginProps = z.infer<typeof loginSchema>;
