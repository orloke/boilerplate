import useAppData from '../../data/useAppContext';
import { SunOutline, MoonOutline } from '@styled-icons/evaicons-outline';

export const ButtonDarkMode = () => {
  const { theme, changeTheme } = useAppData();
  console.log(theme);
  return (
    <button
      onClick={changeTheme}
      className="absolute right-24 top-8 text-darkColor dark:text-white hover:brightness-125 cursor-pointer"
    >
      {theme === 'dark' ? (
        <SunOutline size={32} className=" text-blue-500" />
      ) : (
        <MoonOutline size={32} className=" text-blue-500" />
      )}
    </button>
  );
};
