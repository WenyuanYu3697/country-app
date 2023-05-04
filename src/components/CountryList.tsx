/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import React, { useState, useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCountries } from '../api/country';
import { Pagination } from './Pagination';
import { ICountry } from '../types/country';

interface ICountryList {
  searchName: string;
  searchGroup: string;
}

export const CountryList: FC<ICountryList> = ({ searchName, searchGroup }) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const filterCountries = (country: ICountry) => {
    const filterName = searchName.toLowerCase();
    const filterGroup = searchGroup.toLowerCase();

    const matchName = country.name.common.toLowerCase().includes(filterName);
    const matchGroup = country.region.toLowerCase().includes(filterGroup);

    return (searchName.length === 0 || matchName) && (searchGroup.length === 0 || matchGroup);
  };

  const itemPerPage = 8;
  const totalPages = Math.ceil(countries.filter((country) => filterCountries(country)).length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getCountryList = async () => {
    const { data } = await getCountries();
    setCountries(data);
  };

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pl-5 md:pl-[5rem] min-h-screen bg-gray dark:bg-black-200">
        {countries
          .filter((country) => filterCountries(country))
          .slice(startIndex, endIndex)
          .map((country) => (
            <div
              role="button"
              onClick={() => navigate(`/${country.name.common}`)}
              className="w-[340px] h-[400px] rounded-md mb-[80px] cursor-pointer"
            >
              <img className="w-[340px] h-[200px]" src={country.flags.png} alt={`${country.name.common} flag`} />
              <div className="h-[183px] bg-white dark:bg-black-100 text-black dark:text-white w-[340px]">
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
