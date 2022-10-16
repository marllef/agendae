import { createContext, Dispatch, SetStateAction } from 'react';

type TabBarState = {
  hidden: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
};

export const TabBarContext = createContext<TabBarState>(null);
