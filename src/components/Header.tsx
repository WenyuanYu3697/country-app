import React, { useState } from 'react';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness5Icon from '@mui/icons-material/Brightness5';

export const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="h-[80px] flex justify-between items-center">
      <div className="font-sans font-extrabold H-5 ml-[5rem] text-2xl">Where in the world?</div>
      <button type="button" className="font-sans font-semibold mr-[5rem] flex items-center gap-1" onClick={toggleTheme}>
        {theme === 'light' ? <Brightness5Icon /> : <Brightness2Icon />}
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};
