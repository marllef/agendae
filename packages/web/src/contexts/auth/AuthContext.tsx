import { createContext } from 'react';

type AuthState = {};

export const AuthContext = createContext<AuthState>(null);
