import { FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
}

export const Form = ({ children, className, ...rest }: FormProps) => {
  return <form className={` space-y-3  ${className}`} {...rest}>{children}</form>;
};
