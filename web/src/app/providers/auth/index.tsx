import {
  forgotPasswordWithEmail,
  loginWithEmailAndPassword,
  refreshSession,
  registerWithEmailAndPassword,
  signout,
} from '@/lib/api/auth';
import { LoginProps, RegisterProps } from '@/types/auth';
import { jwtDecode } from 'jwt-decode';
import { ReactNode, createContext, useContext } from 'react';

const AuthContext = createContext<ProviderProps>({
  login: async () => false,
  logout: async () => false,
  session: async () => false,
  refreshSessionToken: async () => false,
  forgotPassword: async () => false,
  register: async () => false,
});

interface ProviderProps {
  login(data: LoginProps): Promise<boolean>;
  logout(): Promise<boolean>;
  session(): Promise<boolean>;
  refreshSessionToken(): Promise<boolean>;
  forgotPassword(email: string): Promise<boolean>;
  register(data: RegisterProps): Promise<boolean>;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const refreshSessionToken = async () => {
    let success: boolean;
    const refreshToken = localStorage.getItem('refreshToken');

    if (refreshToken) {
      const res = await refreshSession(refreshToken);
      if (res) {
        localStorage.setItem('refreshToken', res.refreshToken);
        localStorage.setItem('accessToken', res.accessToken);
        success = true;
      } else {
        success = false;
      }
    } else {
      console.log('Refresh token does not exist in local storage, possibly deleted by user');
      success = false;
    }
    return success;
  };

  const forgotPassword = async (email: string) => {
    const res = await forgotPasswordWithEmail(email);

    if (res) {
      return true;
    }
    return false;
  };

  const register = async (props: RegisterProps) => {
    const res = await registerWithEmailAndPassword({ ...props });
    let success: boolean;
    if (res) {
      localStorage.setItem('refreshToken', res.session.refreshToken);
      localStorage.setItem('accessToken', res.session.accessToken);
      success = true;
    } else {
      success = false;
    }
    return success;
  };

  const login = async (props: LoginProps) => {
    const res = await loginWithEmailAndPassword({ ...props });
    let success: boolean;
    if (res) {
      localStorage.setItem('refreshToken', res.session.refreshToken);
      localStorage.setItem('accessToken', res.session.accessToken);
      success = true;
    } else {
      success = false;
    }
    return success;
  };

  const session = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (!accessToken || !refreshToken) return false;
    const expValue = jwtDecode(accessToken);
    const { getTime } = new Date();

    if (!expValue.exp) return false;

    if (expValue.exp < getTime() / 1000) {
      return await refreshSessionToken();
    }
    return true;
  };

  const logout = async () => {
    const token = localStorage.getItem('refreshToken');
    const res = await signout(token);
    let success: boolean;
    if (res) {
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
      success = true;
    } else {
      success = false;
    }
    return success;
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, session, refreshSessionToken, register, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
