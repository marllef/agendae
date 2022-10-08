import { User } from '@prisma/client';
import { createContext } from 'react';

type AuthState = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: User) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthState>(null);
