import { useEffect, useState } from 'react';
import { MdGpsFixed, MdSearch, MdStar } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { List } from '~/components/List';
import { ScheduleModal } from '~/components/Modal';
import { Responsive } from '~/components/Responsive';
import useAuth from '~/hooks/useAuth';
import useFetch from '~/hooks/useFetch';
import { Service } from '~/interfaces/services';
import { isIncluded } from '~/utils/formatToSearch';
import { ListItem } from './ListItem';

export const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [scheduleId, setScheduleId] = useState<number | null>(null);
  const { data: service, error, loading } = useFetch<Service[]>('/service');

  return (
    <div className="flex flex-col space-y-2 h-full w-full justify-start pt-6 px-1 bg-teal-500">
      <Responsive>
        <div className="flex w-full mx-auto px-4 pb-2 justify-evenly max-w-lg ">
          <Input
            className="bg-white px-4 py-2"
            placeholder="Pesquisar serviço..."
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
            rigthIcon={MdSearch}
          />
        </div>

        <List
          data={(service || []).filter((item) => isIncluded(item.name, search))}
          loading={loading}
          title="Pesquisar Serviços"
          render={(item: Service) => (
            <ListItem
              key={item.id}
              name={item.name}
              price={Number(item.value)}
              onSchedule={() => {
                setScheduleId(item.id);
                setIsOpenModal(true);
              }}
              description={item.description}
              business={item.business.name}
            />
          )}
        />
        {scheduleId && (
          <ScheduleModal
            open={isOpenModal}
            scheduleId={scheduleId}
            onClose={() => setIsOpenModal(false)}
          />
        )}
      </Responsive>
    </div>
  );
};
