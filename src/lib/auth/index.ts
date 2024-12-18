import { HttpMethod } from '@/constants/enums';
import { request } from '@/lib/request';
import { LoginResponseSchema } from '@/schemas/response/auth';
import { AuthResponse } from '@/types/request';
import { User } from '@/types/user';

export const getUser = () => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    const data = { headers: { Authorization: `Bearer ${accessToken})}` } };
    const response = request<User>(`${import.meta.env.VITE_NHOST_URL_AUTH}/user`, {
      ...data,
    });
    return response;
  }
};

export const signout = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  let response: string;

  if (refreshToken && accessToken) {
    const data = {
      method: HttpMethod.POST,
      body: JSON.stringify({ all: false, refreshToken: refreshToken }),
      headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    };

    response = await request<string>(`${import.meta.env.VITE_NHOST_URL_AUTH}/signout`, {
      ...data,
    });
    if (response === 'OK') return true;
  } else {
    console.log('Error retrieving credentials from local storage');
  }
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
  displayName: string
): Promise<AuthResponse | undefined> => {
  const data = {
    method: HttpMethod.POST,
    body: JSON.stringify({ email: email, password: password, displayName: displayName ?? 'User' }),
    headers: { 'content-type': 'application/json' },
  };

  const response = await request(`${import.meta.env.VITE_NHOST_URL_AUTH}/signup/email-password`, {
    ...data,
  });

  try {
    const result = LoginResponseSchema.parse(response);
    return result;
  } catch (error) {
    console.log('Error parsing response schema: ', error);
  }
};

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<AuthResponse | undefined> => {
  const data = {
    method: HttpMethod.POST,
    body: JSON.stringify({ email: email, password: password }),
    headers: { 'content-type': 'application/json' },
  };

  const response = await request(`${import.meta.env.VITE_NHOST_URL_AUTH}/signin/email-password`, {
    ...data,
  });

  if (response) {
    try {
      const result = LoginResponseSchema.parse(response);
      localStorage.setItem('refreshToken', result.session.refreshToken);
      localStorage.setItem('accessToken', result.session.accessToken);
      return result;
    } catch (error) {
      console.log('Error parsing response schema: ', error);
    }
  }
};
