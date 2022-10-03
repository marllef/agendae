import { Business } from '@prisma/client';
import { useEffect, useState } from 'react';
import { MdGpsFixed, MdStar } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import useAuth from '~/hooks/useAuth';
import useFetch from '~/hooks/useFetch';
import BusinessService from '~/services/BusinessService';
import { List, ListItem } from './List';

export const HomePage = () => {
  const [data, setData] = useState([]);
  const { isAuthenticated } = useAuth();
  const { data: business, error, loading } = useFetch<Business[]>('/business');

  useEffect(() => {
    const getBusiness = async () => {
      const business = await BusinessService.getAll();
      setData(business);
    };

    getBusiness().catch(console.error);
  }, []);
  return (
    <div className="flex flex-col space-y-2 h-full w-full justify-start py-2 pt-6 px-1 bg-teal-500">
      {!isAuthenticated && <Navigate to={'/'} />}

      <div className="flex w-full mx-auto px-4 justify-evenly max-w-lg">
        <Input
          className="bg-white px-4 py-3"
          placeholder="Onde você está?"
          rigthIcon={MdGpsFixed}
        />
      </div>

      <List data={business} loading={loading} title="Estabelecimentos" />
    </div>
  );
};
