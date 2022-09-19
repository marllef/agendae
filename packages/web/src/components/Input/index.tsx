import { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { MdPerson } from 'react-icons/md';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
}

export const Input = ({
  className,
  placeholder,
  icon: Icon,
  ...rest
}: Props) => {
  return (
    <label className="flex relative w-full  justify-center items-center text-teal-600 rounded">
      {Icon && (
        <span className="flex absolute left-0 items-center rounded-l-full px-3 py-2 text-xl border-slate-300 h-full">
          <Icon />
        </span>
      )}
      <input
        placeholder={placeholder}
        className={`${className} flex w-full bg-slate-200 border-slate-300 placeholder:text-slate-400 rounded-full ${
          Icon ? 'pl-9' : ''
        } focus:outline-none px-3 py-2 focus:ring ring-teal-400`}
        {...rest}
      />
    </label>
  );
};
