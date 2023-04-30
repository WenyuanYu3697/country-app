export interface IFilterProps {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
}

export interface CFilterProps {
  searchName: string;
  searchGroup: string;
}

export interface GFilterProps {
  searchGroup: string;
  setSearchGroup: React.Dispatch<React.SetStateAction<string>>;
}
