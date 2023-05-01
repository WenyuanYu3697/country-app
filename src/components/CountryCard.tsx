/* eslint-disable no-console */
import React, { useState, useEffect, FC } from 'react';
import { getCountries } from '../api/country';
import { Pagination } from './Pagination';
import { ICountry } from '../types/country';

export const CountryCard: FC<CFilterProps> = ({ searchName, searchGroup }) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [container, setContainer] = useState<ICountry[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 8;
  const totalPages = Math.ceil(countries.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const dataForEachPage = countries.slice(startIndex, endIndex);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const initialUpdate = async () => {
    try {
      const res = await getCountries();
      setContainer(res.data);
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
    setCurrentPage(1);
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
    <div>
      <div className="grid grid-cols-4 gap-5 ml-[5rem] mt-[2rem]">
        {dataForEachPage.map((country) => (
          <div className="w-[340px] h-[400px] rounded-md mb-[80px]">
            <img className="w-[340px] h-[200px]" src={country.flags.png} alt={`${country.name.common} flag`} />
            <div className="h-[183px] bg-white w-[340px]">
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
      <div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
      </div>
    </div>
  );
};
