import React, { FC, useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CountryListPage } from './pages/CountryListPage';
import { CountryDetailPage } from './pages/CountryDetailPage';
import { Header } from './components/Header';

export const App: FC = () => {
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
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountryListPage />} />
          <Route path="/:countryName" element={<CountryDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
