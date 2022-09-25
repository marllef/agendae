import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SchedulePage } from '~/pages/nav/schedule';
import { HomePage } from '~/pages/home';
import { LoginPage } from '~/pages/login';
import { SearchPage } from '~/pages/nav/search';
import { ProfilePage } from '~/pages/nav/profile';
import { RegisterPage } from '~/pages/register';
import { FavoritePage } from '~/pages/nav/favorite';
import { TabBarNavigate } from '~/navigator';

export default () => {
  return (
    <Routes>
      <Route path="/app/*" element={<TabBarNavigate />} />

      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};
