/* eslint-disable no-console */
import React, { useState, useEffect, FC } from 'react';
import { Icountry } from '../interfaces/CountryCard';
import { CFilterProps } from '../interfaces/Dashboard';
import { countryData } from '../api/api_countrycard';

export const CountryCard: FC<CFilterProps> = ({ searchName, searchGroup }) => {
  const [countries, setCountries] = useState<Icountry[]>([]);
  const [container, setContainer] = useState<Icountry[]>([]);

  const initialUpdate = async () => {
    try {
      const res = await countryData();
      setContainer(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = (value: string) => {
    setCountries(
      container.filter((country) => {
        const name = searchName.length === 0 ? country.region : country.name.common;
        return name?.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  useEffect(() => {
    const getData = async () => {
      console.log(searchGroup);
      console.log(searchName.length);
      if (container.length === 0) {
        await initialUpdate();
      }
      if (searchName) {
        fetchData(searchName);
      } else if (searchGroup) {
        fetchData(searchGroup);
      } else {
        setCountries(container);
      }
    };
    getData();
  }, [container, searchName, searchGroup]);

  return (
    <div className="grid grid-cols-4 gap-5 ml-[5rem] mt-[2rem]">
      {countries.map((country) => (
        <div className="w-[300px] h-[400px] rounded-md mb-[80px]">
          <img className="w-[300px] h-[200px]" src={country.flags.png} alt={`${country.name.common} flag`} />
          <div className="h-[183px] bg-white w-[300px]">
            <div className="pl-[24px] font-sans font-extrabold pt-5 text-[18px]">{country.name.common}</div>
            <div className="pl-[24px] pt-[10px]">
              <span className="font-sans font-semibold pr-1">Population:</span>
              {country.population}
            </div>
            <div className="pl-[24px]">
              <span className="font-sans font-semibold pr-1">Region:</span>
              {country.region}
            </div>
            <div className="pl-[24px]">
              <span className="font-sans font-semibold pr-1">Capital:</span>
              {country.capital}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
