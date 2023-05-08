import React, { useState, FC } from 'react';
import { Filter } from '../components/Filter';
import { CountryList } from '../components/CountryList';

export const CountryListPage: FC = () => {
  const [searchName, setSearchName] = useState('');
  const [searchGroup, setSearchGroup] = useState('');

  return (
    <div className="min-h-screen">
      <div className="flex-1 w-screen bg-gray dark:bg-black-200">
        <div className="flex flex-col max-w-7xl mx-auto">
          <Filter {...{ searchName, searchGroup, setSearchGroup, setSearchName }} />
          <CountryList {...{ searchName, searchGroup }} />
        </div>
      </div>
    </div>
  );
};
