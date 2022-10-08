import { useCallback } from 'react';
import { Button } from '~/components/Button';
import { Skeleton } from '~/components/Skeleton';
import { StarRating } from '~/components/StarRating';

interface Props {
  name: string;
  ratings: number[];
}

export const ListItem = ({ name, ratings }: Props) => {
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
