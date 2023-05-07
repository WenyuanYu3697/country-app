/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';

export const CountryDetailPage = () => {
  // const params = useParams();
  // const { countryName } = params;
  // const [Icountry, setIcountry] = useState<ICountry[]>([]);

  /*
  console.log(countryName);
  const fetchData = async () => {
    const { data } = await getCountry(countryName || 'Canada');
    setIcountry(data);
  };

  useEffect(() => {
    fetchData();
  }, [countryName]);
  */
  const navigate = useNavigate();

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div className="">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="bg-gray dark:bg-black-200 h-calc-full-minus-80">
        <button
          className="w-[136px] bg-white dark:bg-black-100 text-black justify-center rounded-md dark:text-white h-[40px] ml-[10rem] mt-[5rem] pt-1 pr-2 gap-5 cursor-pointer"
          type="button"
          onClick={() => navigate('/')}
        >
          <KeyboardBackspaceIcon className="pb-1 pr-2" />
          Back
        </button>
        <div>
          <div className="inline-flex gap-[10rem] pt-[5rem] pl-[5rem] justify-center">
            <img
              className="h-[401px] w-[700px] rounded-md ml-[5rem]"
              src="https://flagcdn.com/w320/ca.png"
              alt="Canada flag"
            />
            <div className="text-black dark:text-white">
              <div className="font-sans font-extrabold font text-[32px] pt-[2rem]">Canada</div>
              <div className="inline-flex gap-[11.4rem] pt-4">
                <div>
                  <span className="font-sans font-semibold text-[16px] pr-1">Native Name:</span>
                  Canada
                </div>
                <div>
                  <span className="font-sans font-semibold text-[16px] pr-1">Top Level Domain: </span>
                  .ca
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[9rem] pt-1">
                <div>
                  <span className="font-sans font-semibold text-[16px] pr-1">Population: </span>
                  39801000
                </div>
                <div>
                  <span className="font-sans font-semibold text-[16px] pr-1">Currencies:</span>
                  CAD
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[9rem] pt-1">
                <div>
                  <span className="font-sans font-semibold text-[16px]">Region:</span> North America
                </div>
                <div>
                  <span className="font-sans font-semibold text-[16px]">Languages: </span> English, French
                </div>
              </div>
              <div className="pt-1">
                <span className="font-sans font-semibold text-[16px]">Sub Region: </span> North America
              </div>
              <div className="pt-1">
                <span className="font-sans font-semibold text-[16px]">Capital: </span>Ottawa
              </div>
              <div className="pt-[7rem] gap-2">
                <span className="font-sans pr-2 font-semibold text-[16px]">Border Countries: </span>
                <span className="px-[1rem] bg-white dark:bg-black-100 shadow-md rounded-sm">The United States</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
