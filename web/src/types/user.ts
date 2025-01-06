import { UserResponseSchema } from '@/schemas/response/auth';
import { z } from 'zod';

export type User = z.infer<typeof UserResponseSchema>;
