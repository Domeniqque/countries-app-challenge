/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ICountry } from '../../../models/Country';
import { actionTypes } from './types';

const { ADD_COUNTRY_LIST, UPDATE_COUNTRY_DATA } = actionTypes;

function addCountryList(countries: ICountry[]) {
  return {
    type: ADD_COUNTRY_LIST,
    payload: { countries, total: countries.length },
  };
}

export interface IUpdateCountry {
  id: string;
  data: Partial<ICountry>;
}

function updateCountry({ id, data }: IUpdateCountry) {
  return {
    type: UPDATE_COUNTRY_DATA,
    payload: { id, data },
  };
}

const actions = { addCountryList, updateCountry };

export default actions;
