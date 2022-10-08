import { useCallback } from 'react';
import { Button } from '~/components/Button';
import { Skeleton } from '~/components/Skeleton';
import { StarRating } from '~/components/StarRating';

interface Props {
  data: any[];
  title: string;
  loading?: boolean;
  error?: string;
  render?: (item: any, index: number, arr?: any[]) => any;
}

export const List = ({
  data = [],
  title,
  render: renderFn,
  loading = true,
}: Props) => {
  const render = useCallback(
    (item: any, index: number, arr: any[]) => {
      if (renderFn) return renderFn(item, index, arr);

      return <ListItem name={item.name} ratings={item.ratings} key={index} />;
    },
    [data, renderFn],
  );

  return (
    <div className="h-full space-y-2 px-2 overflow-auto">
      <h3 className="font-bold text-teal-200 uppercase text-sm bg-teal-500 p-2 sticky top-0">
        {title}
      </h3>

      {(data || [])?.map(render)}

      {loading &&
        Array(6)
          .fill(0)
          .map((value, index) => {
            return (
              <Skeleton key={index} loading width={'100%'} variant="rounded">
                <ListItem name="Loading..." ratings={[]} />
              </Skeleton>
            );
          })}
    </div>
  );
};

export const ListItem = ({ name, ratings }: any) => {
  return (
    <div className="flex items-center px-2 max-h-[7rem] h-full w-full space-x-3 bg-white rounded-lg">
      <div className="bg-teal-500 min-w-[6rem] h-24 rounded-lg"></div>
      <div className="flex flex-col h-full flex-1 justify-between py-1">
        <div>
          <h3 className="text-lg font-bold text-teal-700 line-clamp-1">
            {name}
          </h3>
          <StarRating ratings={[...ratings]} />
        </div>

        <div className="flex w-full items-center justify-center">
          <Button className="bg-teal-500 py-1 my-2 w-full">Serviços</Button>
        </div>
      </div>
    </div>
  );
};
