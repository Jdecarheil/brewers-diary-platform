import { LoginResponseSchema } from '@/schemas/response/auth';

import { z } from 'zod';

export type AuthResponse = z.infer<typeof LoginResponseSchema>;
