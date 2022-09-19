import { useState } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { TabBar, TabBarItem } from '~/components/TabBar';
import {
  IoMdCalendar as Calendar,
  IoMdHeart,
  IoMdHome as Home,
  IoMdPerson,
} from 'react-icons/io';
import { MdSearch as Search } from 'react-icons/md';
import BottomTabNav from '~/routes/BottomTabNav';

export const TabBarNavigate = ({ children }: any) => {
  const { pathname } = useLocation();

  return (
    <div className="w-full h-screen pb-16">
      <main className="w-full h-full">
        <BottomTabNav />
      </main>
      <div className="fixed bottom-0 left-0 right-0 md:hidden select-none transition">
        <TabBar value={pathname}>
          <TabBarItem icon={Home} value={'/'}>
            Inicio
          </TabBarItem>
          <TabBarItem iconSize={28} icon={Search} value={'/search'}>
            Pesquisar
          </TabBarItem>

          <TabBarItem as={'div'} disabled />

          <TabBarItem
            iconSize={30}
            icon={Calendar}
            showLabel={false}
            className="flex absolute z-50 bg-teal-600 rounded-full w-16 h-16  transition-all duration-300
            ring-transparent ring-4 focus:ring-teal-400 text-slate-50 border-white 
            -mt-4 left-[calc(50%-4rem/2)]"
            value={'/schedule'}
          />
          <TabBarItem icon={IoMdHeart} value={'/favorites'}>
            Favoritos
          </TabBarItem>
          <TabBarItem icon={IoMdPerson} value={'/profile'}>
            Perfil
          </TabBarItem>
        </TabBar>
      </div>
    </div>
  );
};