import { User } from '@prisma/client';
import { createContext } from 'react';
import { RegisterFormSchema } from '~/pages/register/FormValidation';

type AuthState = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterFormSchema) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthState>(null);
