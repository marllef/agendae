import {
  Children,
  cloneElement,
  FormEvent,
  isValidElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { VscError } from 'react-icons/vsc';

interface Props {
  children?: ReactNode;
  showLabels?: boolean;
  value?: number | string;
  onChange?: (event: any, value: any) => void;
}

export const TabBar = ({
  children,
  showLabels = false,
  value = 0,
  onChange,
}: Props) => {
  return (
    <div className="flex w-full h-16 bg-slate-100 text-teal-600 border-t">
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return null;

        const childValue =
          child.props.value === undefined ? index : child.props.value;

        return cloneElement<any>(child, {
          showLabel: child.props.showLabel ?? showLabels,
          selected: childValue === value,
          value: childValue,
          onChange,
        });
      })}
    </div>
  );
};
