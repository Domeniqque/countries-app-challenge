import { ICountry } from '../../../models/Country';
import { client } from '../../../apollo';
import { GET_COUNTRIES_QUERY, GET_NEAR_COUNTRIES } from './queries';

interface IFetchCountries {
  countries: ICountry[];
}

export async function fetchCountryList(): Promise<IFetchCountries> {
  const request = await client.query<IFetchCountries>({
    query: GET_COUNTRIES_QUERY,
  });

  return request.data;
}

export interface INearCountry {
  distanceInKm: number;
  countryName: string;
}

export async function fetchNearCountries(
  countryId: string,
): Promise<INearCountry[] | undefined> {
  const request = await client.query<{
    country?: ICountry[];
  }>({
    query: GET_NEAR_COUNTRIES,
    variables: {
      id: countryId,
    },
  });

  const { country } = request.data;

  if (!country) {
    return [];
  }

  return country[0].distanceToOtherCountries || [];
}
