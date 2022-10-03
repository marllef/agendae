import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '~/pages/login';
import { RegisterPage } from '~/pages/register';
import { TabBarNavigate } from '~/navigator';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/app" element={<Navigate to={'/app/home'} />} />
      <Route path="/app/*" element={<TabBarNavigate />} />
    </Routes>
  );
};
