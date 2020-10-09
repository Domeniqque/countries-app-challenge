/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ICountry } from '../../../models/Country';

export function addCountryList(countries: ICountry[]) {
  return {
    type: 'ADD_COUNTRY_LIST',
    payload: { countries },
  };
}
