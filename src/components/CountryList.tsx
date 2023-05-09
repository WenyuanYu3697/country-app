/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import { useState, useEffect, FC } from 'react';
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
    <div className="w-full max-w-desktop mx-auto px-4 xl:px-20">
      <div className="gap-[40px] xl:gap-[74px] flex flex-wrap justify-center">
        {countries
          .filter((country) => filterCountries(country))
          .slice(startIndex, endIndex)
          .map((country) => (
            <div
              key={country.name.common}
              role="button"
              onClick={() => navigate(`/${country.name.common.toLowerCase()}`)}
              className="w-[264px] h-[336px] rounded-md cursor-pointer"
            >
              <img className="w-[264px] h-[160px]" src={country.flags.png} alt={`${country.name.common} flag`} />
              <div className="bg-white dark:bg-black-100 text-black dark:text-white px-6 pt-6 pb-[46px]">
                <div className="font-sans font-extrabold text-[18px]">{country.name.common}</div>
                <div className="mt-4 gap-2">
                  <span className="font-sans font-semibold">Population:</span>
                  {country.population}
                </div>
                <div>
                  <span className="font-sans font-semibold">Region:</span>
                  {country.region}
                </div>
                <div>
                  <span className="font-sans font-semibold">Capital:</span>
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
