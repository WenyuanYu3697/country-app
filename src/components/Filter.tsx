/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
    <div className="bg-gray dark:bg-black-200 flex w-full justify-between items-center md:my-12 px-4 xl:px-0">
      <div className="w-480 rounded-l-sm  bg-white dark:bg-black-100  text-black dark:text-white h-[56px] relative">
        <SearchIcon className="absolute top-4 left-10 bg" />
        <input
          value={searchName}
          className="h-[56px] w-[480px] max-screen:w-auto bg-white dark:bg-black-100 pl-[74px] mr-[90px] font-sans font-regular"
          type="text"
          placeholder="Search for a country"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="relative bg-white dark:bg-black-100 w-[200px] rounded-lg">
        <button
          type="button"
          onClick={() => setIsDropdownOpened(!isDropdownOpened)}
          className="h-[56px] ml-[24px] text-black dark:text-white font-sans font-regular flex items-center gap-5"
        >
          Filter by Region
          {isDropdownOpened ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
        {isDropdownOpened ? (
          <ul className="absolute z-10 top-15 left-0 pl-6 w-full mt-2 bg-white dark:bg-black-100  text-black dark:text-white rounded-md shadow-lg">
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
