import React, { useParams } from 'react-router-dom';

export const CountryDetailPage = () => {
  const params = useParams();

  const { countryName } = params;

  return (
    <div>
      <div>Country Name: {countryName}</div>
      <div>Hello World</div>
    </div>
  );
};
