import React, { useEffect, useState, FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/Header';
import { Filter } from '../components/Filter';
import { CountryList } from '../components/CountryList';

interface CountryLisitProps {
  setCountryName: (name: string) => void;
}

export const CountryListPage: FC<CountryLisitProps> = ({ setCountryName }) => {
  const [searchName, setSearchName] = useState('');
  const [searchGroup, setSearchGroup] = useState('');

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="h-screen">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="flex-1 bg-gray-200">
          <div className="flex flex-col">
            <Filter {...{ searchName, searchGroup, setSearchGroup, setSearchName }} />
            <CountryList {...{ searchName, searchGroup, setCountryName }} />
          </div>
        </div>
      </div>
    </Router>
  );
};
