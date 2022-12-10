import React, { createContext, useEffect, useState } from 'react';
import { Place } from '../types/types';

type AppContextProps = {
  place: Place[];
  setPlace: React.Dispatch<React.SetStateAction<Place[]>>;
  theme: string;
  changeTheme: () => void;
};

type Props = {
  children?: React.ReactNode;
};

const AppContext = createContext<AppContextProps>({
  place: [],
  setPlace: () => {
    [];
  },
  theme: '',
  changeTheme: () => null,
});

export const AppProvider = (props: Props) => {
  const [place, setPlace] = useState<Place[]>([]);
  const [theme, setTheme] = useState('');

  const changeTheme = () => {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    return localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const takeTheme = localStorage.getItem('theme') as string;
    if (!takeTheme) {
      return setTheme('');
    }

    return setTheme(takeTheme);
  }, []);

  return (
    <AppContext.Provider value={{ place, setPlace, theme, changeTheme }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
