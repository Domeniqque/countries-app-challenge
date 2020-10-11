import { ICountry } from '../../../models/Country';

export const actionTypes = {
  ADD_COUNTRY_LIST: 'ADD_COUNTRY_LIST',
  UPDATE_COUNTRY_DATA: 'UPDATE_COUNTRY_DATA',
};

export interface ICountryState {
  list: ICountry[];
  total: number;
}
