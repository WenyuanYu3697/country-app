export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  subregion: string;
  tld: string;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital?: string[];
}
