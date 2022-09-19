import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SchedulePage } from '~/pages/nav/schedule';
import { HomePage } from '~/pages/home';
import { LoginPage } from '~/pages/login';
import { SearchPage } from '~/pages/nav/search';
import { ProfilePage } from '~/pages/nav/profile';
import { RegisterPage } from '~/pages/register';
import { FavoritePage } from '~/pages/nav/favorite';
import { TabBarNavigate } from '~/navigations';

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/*" element={<TabBarNavigate />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
