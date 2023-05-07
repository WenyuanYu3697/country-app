/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CountryListPage } from './pages/CountryListPage';
import { CountryDetailPage } from './pages/CountryDetailPage';

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CountryListPage />} />
      <Route path="/:countryName" element={<CountryDetailPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
