import { useEffect, useState } from 'react';
import { MdArrowBack as ArrowBack } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import colors from 'tailwindcss/colors';
import { BackButton } from '~/components/Button/BackButton';
import { IconButton } from '~/components/Button/IconButton';
import { Carousel } from '~/components/Carousel';
import { List } from '~/components/List';
import { Responsive } from '~/components/Responsive';
import { StarRating } from '~/components/StarRating';
import useTabBar from '~/hooks/useTabBar';
import { Business } from '~/interfaces/business';
import { Service } from '~/interfaces/services';
import BusinessService from '~/services/BusinessService';
import { ListItem } from './ListItem';

export const BusinessPage = () => {
  const [data, setData] = useState<Business>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const businessData = await BusinessService.getOne(Number(id));
      setLoading(false);
      setData(businessData);
    };

    getData().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex w-full h-[14rem] min-h-[14rem] md:min-h-[10rem] bg-teal-500 relative justify-center items-center">
        <BackButton />
        <Carousel images={[]} />
      </div>

      <div className="bg-white z-[1] border-t-4 md:border-x border-b h-full border-teal-600 -mt-10  md:max-w-4xl md:mx-auto md:rounded-t-[2.5rem] md:rounded-b-xl md:px-4 rounded-tl-[2.5rem]">
        <div className="flex w-full">
          <div className="w-28 min-w-[7rem] h-28 rounded-2xl border-4 bg-slate-200 ml-8 -mt-8"></div>
          <div className="pt-1 w-full px-4">
            <h3 className="text-xl line-clamp-1 font-semibold text-teal-600">
              {data?.name}
            </h3>

            <StarRating ratings={data?.ratings} />
            <div className="flex flex-row pt-2 space-x-1">
              {(data?.tags || []).map((tag) => (
                <span
                  className="bg-teal-100 text-teal-800 border border-teal-200 px-1 rounded text-xs"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h3 className="px-4 text-sm uppercase pt-4 font-bold text-teal-500">
          Serviços
        </h3>

        <div className="flex flex-col w-full h-[calc(100vh-19rem)] md:h-[calc(100vh-16rem)] items-start justify-start py-2 overflow-hidden">
          <List
            data={data?.services}
            loading={loading}
            className="w-full"
            render={(service: Service, index) => (
              <ListItem
                key={service.id + index}
                name={service.name}
                value={Number(service.value)}
                description={service.description}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
