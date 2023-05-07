/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness5Icon from '@mui/icons-material/Brightness5';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => (
  <div className="h-[80px] flex justify-between items-center bg-white dark:bg-black-100">
    <div className="font-sans text-black dark:text-white font-extrabold H-5 ml-[5rem] text-2xl max-screen:text-[19px] max-screen:ml-[2rem]">
      Where in the world?
    </div>
    <button
      type="button"
      className="font-sans text-black dark:text-white font-semibold mr-[5rem] max-screen:text-[16px] max-screen:mr-[2rem] flex items-center gap-1"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Brightness5Icon /> : <Brightness2Icon />}
      {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
    </button>
  </div>
);
