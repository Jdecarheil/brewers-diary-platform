import { z } from 'zod';

const UserSchema = {
  accessToken: z.string(),
  accessTokenExpiresIn: z.number(),
  refreshTokenId: z.string(),
  refreshToken: z.string(),
  user: z.object({
    avatarUrl: z.string().nullable(),
    activeMfaType: z.string().nullable(),
    createdAt: z.string().nullable(),
    defaultRole: z.string().nullable(),
    displayName: z.string().nullable(),
    emailVerified: z.boolean().nullable(),
    email: z.string().nullable(),
    id: z.string().nullable(),
    isAnonymous: z.boolean().nullable(),
    locale: z.string().nullable(),
    metadata: z
      .object({
        firstName: z.string().nullable().optional(),
        lastName: z.string().nullable().optional(),
      })
      .nullable(),
    phoneNumber: z.string().nullable(),
    phoneNumberVerified: z.boolean().nullable(),
    roles: z.array(z.string()).nullable(),
  }),
};

const AuthSuccessResponseSchema = {
  session: z.object({
    ...UserSchema,
  }),
};

const LoginSuccessResponseSchema = z
  .object({
    ...AuthSuccessResponseSchema,
    mfa: z.object({ ticket: z.string().nullable() }).nullable(),
  })
  .strict();

const RegisterSuccessResponseSchema = z.object({ ...AuthSuccessResponseSchema });

export const LoginResponseSchema = LoginSuccessResponseSchema;
export const RegisterResponseSchema = RegisterSuccessResponseSchema;
export const UserResponseSchema = z.object({ ...UserSchema });
