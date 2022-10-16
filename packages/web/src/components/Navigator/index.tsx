import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { TabBar, TabBarItem } from '~/components/TabBar';
import {
  IoMdCalendar as Calendar,
  IoMdHeart,
  IoMdPerson,
} from 'react-icons/io';
import { MdSearch as Search, MdStore } from 'react-icons/md';
import BottomTabNav from '~/routes/BottomTabNav';
import useAuth from '~/hooks/useAuth';

export const TabBarNavigate = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();
  const hidden = pathname.includes('/app/business');

  return (
    <div className={`w-full h-screen ${hidden ? 'pb-0' : 'pb-16'}  md:pb-0 overflow-hidden`}>
      {!isAuthenticated && <Navigate to={'/'} />}

      <main className="w-full h-full md:mx-auto">
        <BottomTabNav />
      </main>

      <div
        className={`fixed bottom-0 left-0 right-0 md:scale-0 ${
          hidden ? 'scale-0' : 'scale-100'
        } z-10 select-none`}
      >
        <TabBar value={pathname}>
          <TabBarItem icon={MdStore} value={'/app/home'}>
            Negócios
          </TabBarItem>
          <TabBarItem iconSize={28} icon={Search} value={'/app/search'}>
            Pesquisar
          </TabBarItem>

          <TabBarItem as={'div'} disabled />

          <TabBarItem
            iconSize={30}
            icon={Calendar}
            showLabel={false}
            className="flex absolute z-50 bg-teal-600 rounded-full w-16 h-16  transition-all duration-300
            ring-teal-50 ring-4 focus:ring-teal-400 focus:border-0 text-slate-50 border-white 
            -mt-4 left-[calc(50%-4rem/2)]"
            value={'/app/schedule'}
          />
          <TabBarItem icon={IoMdHeart} value={'/app/favorites'}>
            Favoritos
          </TabBarItem>
          <TabBarItem icon={IoMdPerson} value={'/app/profile'}>
            Perfil
          </TabBarItem>
        </TabBar>
      </div>
    </div>
  );
};
