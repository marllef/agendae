import { useContext, useEffect } from 'react';
import { TabBarContext } from '~/contexts/TabBar/TabBarContext';

export default (hidden: boolean = false) => {
  const { setHidden } = useContext(TabBarContext);

  useEffect(() => {
    setHidden(hidden);
  }, [setHidden]);
};
