import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '~/pages/login';
import { RegisterPage } from '~/pages/register';
import { TabBarNavigate } from '~/components/Navigator';
import { SignOutPage } from '~/pages/signout';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sair" element={<SignOutPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/app" element={<Navigate to={'/app/home'} />} />
      <Route path="/app/*" element={<TabBarNavigate />} />
    </Routes>
  );
};
