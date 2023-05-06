export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  subregion: string;
  tld: string;
  currencies: string;
  languages?: string[];
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital?: string[];
}
