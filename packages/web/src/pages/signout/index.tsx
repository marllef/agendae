import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';

export const SignOutPage = () => {
  const { signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      signOut();
    }
    navigate('/');
  }, [isAuthenticated]);

  return (
    <div className="flex w-full h-screen items-center justify-center">
      {!isAuthenticated ? (
        <Navigate to={'/'} />
      ) : (
        <h3 className="text-xl uppercase text-slate-700 animate-pulse">
          Saindo...
        </h3>
      )}
    </div>
  );
};
