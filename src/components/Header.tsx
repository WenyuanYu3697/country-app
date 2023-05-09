/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness5Icon from '@mui/icons-material/Brightness5';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => (
  <div className="bg-white dark:bg-black-100">
    <div className="max-w-desktop mx-auto py-6 px-4 xl:px-20 flex justify-between items-center">
      <div className="font-sans text-black dark:text-white font-extrabold text-2xl max-screen:text-[19px]">
        Where in the world?
      </div>
      <button
        type="button"
        className="font-sans text-black dark:text-white font-semibold max-screen:text-[16px] flex items-center gap-1"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <Brightness5Icon /> : <Brightness2Icon />}
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  </div>
);
