import { ReactNode, useEffect, useState } from 'react';
import { api } from '~/configs';
import { AuthContext } from './AuthContext';

interface Props {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const response = await api.get('/auth/validate');
      console.log(response.data);
    };

    getCurrentUser().catch(console.error);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
