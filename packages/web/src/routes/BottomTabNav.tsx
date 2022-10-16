import { Route, Routes } from 'react-router-dom';
import { SchedulePage } from '~/pages/nav/schedule';
import { HomePage } from '~/pages/nav/home';
import { SearchPage } from '~/pages/nav/search';
import { ProfilePage } from '~/pages/nav/profile';
import { FavoritePage } from '~/pages/nav/favorite';
import { BusinessPage } from '~/pages/nav/business';

export default () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="home" element={<HomePage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="business">
          <Route path=":id" element={<BusinessPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
