import { Business } from '@prisma/client';
import { useEffect, useState } from 'react';
import { MdGpsFixed, MdSearch, MdStar } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { List } from '~/components/List';
import useAuth from '~/hooks/useAuth';
import useFetch from '~/hooks/useFetch';
import BusinessService from '~/services/BusinessService';
import { isIncluded } from '~/utils/formatToSearch';
import { ListItem } from './ListItem';

export const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const [search, setSearch] = useState('');
  const { data: business, error, loading } = useFetch<Business[]>('/business');

  return (
    <div className="flex flex-col space-y-2 h-full w-full justify-start py-2 pt-6 px-1 bg-teal-500">
      {!isAuthenticated && <Navigate to={'/'} />}

      <div className="flex w-full mx-auto px-4 justify-evenly max-w-lg">
        <Input
          className="bg-white px-4 py-2"
          placeholder="Pesquisar estabelecimento..."
          rigthIcon={MdSearch}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <List
        data={(business || []).filter((item) => isIncluded(item.name , search))}
        loading={loading}
        title="Estabelecimentos"
        render={(item, index) => (
          <ListItem key={index} name={item.name} ratings={item.ratings} />
        )}
      />
    </div>
  );
};
