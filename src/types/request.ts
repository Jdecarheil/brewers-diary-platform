import { User } from '@/types/user';

export type AuthResponse = {
  session: {
    accessToken: string;
    accessTokenExpiresIn: number;
    refreshTokenId: string;
    refreshToken: string;
    user: User;
  };
  mfa: {
    ticket: string | null;
  } | null;
};

export type HttpError = {
  status: number;
  message: string;
  error: string;
};
