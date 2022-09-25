import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, disabled, ...rest }: Props) => {
  return (
    <button
      className={`${className} bg-teal-600 rounded-full p-2 text-slate-50 font-bold hover:opacity-90 active:opacity-80 disabled:opacity-75`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
