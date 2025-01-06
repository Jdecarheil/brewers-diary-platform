import { LoginResponseSchema, RegisterResponseSchema } from '@/schemas/response/auth';

import { z } from 'zod';

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type RegisterResponse = z.infer<typeof RegisterResponseSchema>;
