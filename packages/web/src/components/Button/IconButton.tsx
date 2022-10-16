import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { MdAdd } from 'react-icons/md';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  size?: number;
}

export const IconButton = ({
  children,
  icon: Icon = MdAdd,
  size = 22,
  ...rest
}: Props) => {
  return (
    <button className='flex justify-center items-center text-xs' {...rest}>
      <Icon size={size} />
      {children}
    </button>
  );
};
