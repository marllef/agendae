import { MdStore } from 'react-icons/md';
import { Button } from '~/components/Button';
import { ScheduleModal } from '~/components/Modal';
import { BRL } from '~/utils/currency';

interface Props {
  name: string;
  description?: string;
  price?: number;
  business?: string;
  onSchedule?: () => void;
}

export const ListItem = ({
  name,
  description,
  price,
  business = 'Loja',
  onSchedule,
}: Props) => {
  return (
    <div className="flex items-center px-2 max-h-[7rem] h-full w-full space-x-3 bg-white rounded-lg group">
      <div className="bg-teal-500 min-w-[6rem] h-24 rounded-lg relative overflow-hidden"></div>
      <div className="flex flex-col h-full flex-1 justify-between py-1">
        <div>
          <h3 className="text-lg font-bold text-teal-600 line-clamp-1">
            {name.substring(0, 23)}
            {name.length > 23 && '...'}
          </h3>
          <div className="flex flex-row items-center space-x-1 text-xs  font-semibold text-slate-600">
            <MdStore className="text-teal-500" />
            <p className="line-clamp-1">{business}</p>
          </div>
          <div className="line-clamp-1 text-xs text-slate-400">
            {description}
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <Button
            className="bg-teal-500 py-1 my-2 line-clamp-1 w-full"
            onClick={onSchedule}
          >
            Agendar ({BRL(price)})
          </Button>
        </div>
      </div>
    </div>
  );
};
