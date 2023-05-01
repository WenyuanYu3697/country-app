import { ICountry } from '../types/country';
import { instance } from './instance';

export const getCountries = async () => instance.get<ICountry[]>('/all');
