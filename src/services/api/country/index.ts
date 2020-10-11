import { ICountry } from '../../../models/Country';
import { client } from '../../../apollo';
import { GET_COUNTRIES_QUERY } from './queries';

interface IFetchCountry {
  countries: ICountry[];
}

export async function addCountryList(): Promise<IFetchCountry> {
  const request = await client.query<IFetchCountry>({
    query: GET_COUNTRIES_QUERY,
  });

  return request.data;
}
