import React, { createContext, useState } from 'react';
import { Place } from '../types/types';

type AppContextProps = {
  place: Place[];
  setPlace: React.Dispatch<React.SetStateAction<Place[]>>;
};

type Props = {
  children?: React.ReactNode;
};

const AppContext = createContext<AppContextProps>({
  place: [],
  setPlace: () => {
    [];
  },
});

export const AppProvider = (props: Props) => {
  const [place, setPlace] = useState<Place[]>([]);

  return (
    <AppContext.Provider value={{ place, setPlace }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
