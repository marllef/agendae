import { BRL } from '~/utils/currency';

interface Props {
  name: string;
  description: string;
  value: number;
}

export const ListItem = ({ name, description, value }: Props) => {
  return (
    <div className="flex items-center px-2 max-h-[7rem] h-full w-full space-x-3 bg-slate-100 rounded-lg overflow-hidden">
      <div className="bg-teal-500 min-w-[6rem] h-24 rounded-lg"></div>
      <div className="flex flex-col h-full flex-1 justify-between py-1">
        <div>
          <h3 className="text-lg font-bold text-teal-700 line-clamp-1">
            {name}
          </h3>

          <p className="line-clamp-3 text-xs text-slate-500 text-justify pr-2 pt-1">
            {description}
          </p>
        </div>
        <p className="text-end line-clamp-1 font-bold text-teal-600">
          {BRL(value)}
        </p>
      </div>
    </div>
  );
};
