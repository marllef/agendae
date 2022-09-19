import { Route, Routes } from 'react-router-dom';
import { SchedulePage } from '~/pages/nav/schedule';
import { HomePage } from '~/pages/home';
import { SearchPage } from '~/pages/nav/search';
import { ProfilePage } from '~/pages/nav/profile';
import { FavoritePage } from '~/pages/nav/favorite';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
