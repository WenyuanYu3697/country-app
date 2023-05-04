import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountryListPage } from './CountryListPage';
import { CountryDetailPage } from './CountryDetailPage';

export const Dashboard = () => {
  const [countryDetail, setCountryDetail] = useState<string>('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryListPage setCountryName={(name: string) => setCountryDetail(name)} />} />
        <Route path="/:countryName" element={<CountryDetailPage />} />
      </Routes>
    </Router>
  );
};
