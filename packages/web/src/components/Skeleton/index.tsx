import { ReactNode } from 'react';
import { Skeleton as Load } from '@mui/material';

interface Props {
  children?: ReactNode;
  loading?: boolean;
  variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
  width?: string | number;
  height?: string | number;
}

export const Skeleton = ({
  children,
  loading,
  variant = 'rectangular',
  width,
  height,
}: Props) => {
  return (
    <>
      {loading ? (
        <Load width={width} variant={variant}  height={height}>
          {children}
        </Load>
      ) : (
        children
      )}
    </>
  );
};
