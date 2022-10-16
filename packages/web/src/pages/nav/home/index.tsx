import { Business } from '@prisma/client';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Input } from '~/components/Input';
import { List } from '~/components/List';
import { Responsive } from '~/components/Responsive';
import useFetch from '~/hooks/useFetch';
import { isIncluded } from '~/utils/formatToSearch';
import { ListItem } from './ListItem';

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const { data: business, loading } = useFetch<Business[]>('/business');

  return (
    <div className="flex flex-col space-y-2 h-full w-full justify-start py-2 pt-6 px-1 bg-teal-500">
      <Responsive>
        <div className="flex w-full mx-auto px-4 pb-2 justify-evenly max-w-lg">
          <Input
            className="bg-white px-4 py-2"
            placeholder="Pesquisar estabelecimento..."
            rigthIcon={MdSearch}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <List
          data={(business || []).filter((item) =>
            isIncluded(item.name, search),
          )}
          loading={loading}
          title="Estabelecimentos"
          render={(item: Business, index) => (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              ratings={item.ratings}
              path={`/app/business/${item.id}`}
            />
          )}
        />
      </Responsive>
    </div>
  );
};
