import { User } from '@prisma/client';
import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api, keys } from '~/configs';
import AuthService from '~/services/AuthService';
import { InternalError } from '~/utils/helpers';
import { AuthContext } from './AuthContext';

interface Props {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const isAuthenticated = Boolean(localStorage.getItem(keys.AUTH_TOKEN));

  useEffect(() => {
    const getCurrentUser = async () => {
      if (!isAuthenticated) return;

      const response = await api.get('/auth/validate');

      if (!response.data) throw new InternalError('Não autenticado');

      setUser(response.data);
    };

    getCurrentUser().catch(console.error);
  }, [isAuthenticated, location]);

  const login = async (email: string, password: string) => {
    try {
      const { token } = await AuthService.signIn(email, password);
      localStorage.setItem(keys.AUTH_TOKEN, token);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const register = async (data: User) => {
    try {
      await AuthService.signUp(data);
      await login(data.email, data.password);
    } catch (err: any) {
      console.log(err.mesage);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
