import React, { useState, FC } from 'react';
import { Filter } from '../components/Filter';
import { CountryList } from '../components/CountryList';

export const CountryListPage: FC = () => {
  const [searchName, setSearchName] = useState('');
  const [searchGroup, setSearchGroup] = useState('');

  return (
    <div className="h-screen">
      <div className="flex-1 bg-gray-200">
        <div className="flex flex-col">
          <Filter {...{ searchName, searchGroup, setSearchGroup, setSearchName }} />
          <CountryList {...{ searchName, searchGroup }} />
        </div>
      </div>
    </div>
  );
};
