import { ElementType, FormEvent, ReactNode, useRef } from 'react';
import { IconType } from 'react-icons';
import { VscError } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

type Props = {
  label?: string;
  to?: string;
  as?: ElementType;
  iconSize?: number;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  icon?: IconType;
  value?: string | number;
  selected?: boolean;
  showLabel?: boolean;
  onClick?: (event: FormEvent<any>) => void;
  onChange?: (event: FormEvent<any>, value: string | number) => void;
};

export const TabBarItem = ({
  label,
  children,
  as: Component = 'button',
  className,
  iconSize = 24,
  value,
  disabled,
  selected = false,
  showLabel = false,
  onChange,
  onClick,
  icon: Icon = VscError,
}: Props) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const handleChange = (event: FormEvent<any>) => {
    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
    if (!disabled) {
      navigate(String(value));
    }
    ref.current.focus();
  };

  return (
    <Component
      ref={ref}
      className={`${className} group flex flex-col flex-1 outline-none focus:outline-none justify-center items-center select-none `}
      onClick={handleChange}
    >
      {Icon && <Icon size={iconSize} />}
      <span
        className={`${
          selected ? 'text-sm' : 'text-[0.5rem]'
        } flex flex-col justify-center items-center ease-in-out  group-focus:text-sm transition-all duration-300`}
      >
        {(selected || showLabel) && <>{children || label}</>}
      </span>
    </Component>
  );
};
