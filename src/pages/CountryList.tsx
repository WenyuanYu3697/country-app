import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Filter } from '../components/Filter';
import { CountryCard } from '../components/CountryCard';

export const CountryList = () => {
  const [searchName, setSearchName] = useState('');
  const [searchGroup, setSearchGroup] = useState('');

  return (
    <div className=" h-screen">
      <Header />
      <div className="flex-1 bg-gray-200">
        <div className="flex flex-col">
          <Filter
            searchName={searchName}
            setSearchName={setSearchName}
            searchGroup={searchGroup}
            setSearchGroup={setSearchGroup}
          />
          <CountryCard searchName={searchName} searchGroup={searchGroup} />
        </div>
      </div>
    </div>
  );
};
