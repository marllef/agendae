import { User } from '@prisma/client';
import { ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api, keys } from '~/configs';
import { RegisterFormSchema } from '~/pages/register/FormValidation';
import AuthService from '~/services/AuthService';
import { InternalError } from '~/utils/helpers';
import { AuthContext } from './AuthContext';

interface Props {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem(keys.AUTH_TOKEN));

  useEffect(() => {
    const getCurrentUser = async () => {
      if (!isAuthenticated) return;

      const response = await api.get('/auth/validate');

      if (!response.data) throw new Error('Não autenticado');

      setUser(response.data);
    };

    getCurrentUser().catch(async () => {
      await signOut();
      navigate('/');
    });
  }, [isAuthenticated, location]);

  const login = async (email: string, password: string) => {
    try {
      const { token } = await AuthService.signIn(email, password);
      localStorage.setItem(keys.AUTH_TOKEN, token);
    } catch (err: any) {
      throw err;
    }
  };

  const register = async (data: RegisterFormSchema) => {
    try {
      await AuthService.signUp(data);
      await login(data.email, data.password);
    } catch (err: any) {
      throw err;
    }
  };

  const signOut = async () => {
    localStorage.setItem(keys.AUTH_TOKEN, '');
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, signOut, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
