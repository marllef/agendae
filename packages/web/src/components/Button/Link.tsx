import { ReactNode } from 'react';
import { Link as RLink } from 'react-router-dom';

interface Props {
  href?: string;
  children?: ReactNode;
  className?: string;
}

export const Link = ({ children, className, href }: Props) => {
  return (
    <RLink to={href}>
      <span
        className={`${className} text-xs font-semibold text-teal-600 hover:text-teal-700`}
      >
        {children}
      </span>
    </RLink>
  );
};
