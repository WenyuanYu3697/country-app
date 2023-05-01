/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface IFilterProps {
  searchName: string;
  searchGroup: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  setSearchGroup: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter: FC<IFilterProps> = ({ searchName, searchGroup, setSearchName, setSearchGroup }) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const handleChange = (name: string) => setSearchName(name);

  const handleGroupChange = (groupName: string) => setSearchGroup(groupName === searchGroup ? '' : groupName);

  return (
    <div className="flex justify-between items-center mt-[3rem] h-[56px] rounded-md">
      <div className="w-480 rounded-l-sm h-[56px] ml-[80px] relative">
        <SearchIcon className="absolute top-4 left-10 bg" />
        <input
          value={searchName}
          className="h-[56px] w-[480px] pl-[74px] font-sans font-regular"
          type="search"
          placeholder="Search for a country"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="relative  bg-white w-[200px] mr-[80px] rounded-lg">
        <button
          type="button"
          onClick={() => setIsDropdownOpened(!isDropdownOpened)}
          className="h-[56px] ml-[24px] font-sans font-regular flex items-center gap-5"
        >
          Filter by Region
          {isDropdownOpened ? <KeyboardArrowLeftIcon /> : <KeyboardArrowDownIcon />}
        </button>
        {isDropdownOpened ? (
          <ul className="absolute z-10 top-15 left-0 pl-6 w-full mt-2 bg-white rounded-md shadow-lg">
            <li className="pt-3" role="button" onClick={() => handleGroupChange('Africa')}>
              Africa
            </li>
            <li className="pt-1" role="button" onClick={() => handleGroupChange('Americas')}>
              Americas
            </li>
            <li className="pt-1" role="button" onClick={() => handleGroupChange('Asia')}>
              Asia
            </li>
            <li className="pt-1" role="button" onClick={() => handleGroupChange('Europe')}>
              Europe
            </li>
            <li className="pt-1 pb-3" role="button" onClick={() => handleGroupChange('Oceania')}>
              Oceania
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};
