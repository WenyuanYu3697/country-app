/* eslint-disable no-console */
export const countryData = async () => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
