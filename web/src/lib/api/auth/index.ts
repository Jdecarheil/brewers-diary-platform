import { HttpMethod } from '@/constants/enums';
import { request } from '@/lib/request';
import {
  LoginResponseSchema,
  RegisterResponseSchema,
  UserResponseSchema,
} from '@/schemas/response/auth';
import { LoginProps, RegisterProps } from '@/types/auth';
import { LoginResponse, RegisterResponse } from '@/types/request';
import { User } from '@/types/user';

export const forgotPasswordWithEmail = async (email: string): Promise<boolean | undefined> => {
  const data = {
    method: HttpMethod.POST,
    body: JSON.stringify({ email: email }),
    headers: { 'content-type': 'application/json' },
  };

  const response = await request<string>(
    `${import.meta.env.VITE_NHOST_URL_AUTH}/user/password/reset`,
    {
      ...data,
    }
  );
  if (response === 'OK') return true;
};

export const signout = async (token: string | null): Promise<boolean | undefined> => {
  const data = {
    method: HttpMethod.POST,
    body: JSON.stringify({ all: false, refreshToken: token }),
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  };

  const response = await request<string>(`${import.meta.env.VITE_NHOST_URL_AUTH}/signout`, {
    ...data,
  });
  if (response === 'OK') return true;
};

export const registerWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}: RegisterProps): Promise<RegisterResponse | undefined> => {
  const data = {
    method: HttpMethod.POST,
    body: JSON.stringify({ email, password, options: { displayName: displayName ?? 'user' } }),
    headers: { 'content-type': 'application/json' },
  };

  const response = await request<RegisterResponse>(
    `${import.meta.env.VITE_NHOST_URL_AUTH}/signup/email-password`,
    {
      ...data,
    }
  );

  try {
    const result = RegisterResponseSchema.parse(response);
    return result;
  } catch (error) {
    console.log('Error parsing response schema: ', error);
  }
};

export const loginWithEmailAndPassword = async (
  props: LoginProps
): Promise<LoginResponse | undefined> => {
  const data = {
    method: HttpMethod.POST,
    body: JSON.stringify({ ...props }),
    headers: { 'content-type': 'application/json' },
  };

  const response = await request<LoginResponse>(
    `${import.meta.env.VITE_NHOST_URL_AUTH}/signin/email-password`,
    {
      ...data,
    }
  );

  if (response) {
    try {
      const result = LoginResponseSchema.parse(response);

      return result;
    } catch (error) {
      console.log('Error parsing response schema: ', error);
    }
  }
};

export const refreshSession = async (token: string): Promise<User | undefined> => {
  const data = {
    method: HttpMethod.POST,
    body: JSON.stringify({ refreshToken: token }),
    headers: { 'content-type': 'application/json' },
  };
  const response = await request<User>(`${import.meta.env.VITE_NHOST_URL_AUTH}/token`, {
    ...data,
  });

  if (response) {
    try {
      const result = UserResponseSchema.parse(response);
      return result;
    } catch (error) {
      console.log('Error parsing response schema: ', error);
    }
  }
};
