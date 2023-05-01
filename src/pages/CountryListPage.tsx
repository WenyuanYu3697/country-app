import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Filter } from '../components/Filter';
import { CountryList } from '../components/CountryList';

export const CountryListPage = () => {
  const [searchName, setSearchName] = useState('');
  const [searchGroup, setSearchGroup] = useState('');

  return (
    <div className="h-screen">
      <Header />
      <div className="flex-1 bg-gray-200">
        <div className="flex flex-col">
          <Filter {...{ searchName, searchGroup, setSearchGroup, setSearchName }} />
          <CountryList {...{ searchName, searchGroup }} />
        </div>
      </div>
    </div>
  );
};
