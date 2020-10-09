import { gql } from '@apollo/client';

export interface ITopLevelDomain {
  _id: string;
  name: string;
  countries: {
    _id: string;
    name: string;
  }[];
}

export interface ICountry {
  _id: string;
  name: string;
  capital: string;
  area?: number;
  population?: number;

  location?: {
    latitude: number;
    longitude: number;
  };

  topLevelDomains?: ITopLevelDomain[];

  flag: {
    emoji: string;
    svgFile?: string;
  };
}

export const ALL_COUNTRIES_QUERY = gql`
  query {
    countries: Country(orderBy: name_asc) {
      _id
      name
      capital
      flag {
        emoji
      }
    }
  }
`;

export const FIND_COUNTRY_QUERY = gql`
  query Find($id: String) {
    countries: Country(_id: $id, first: 1) {
      _id
      name
      capital
      area
      population
      location {
        latitude
        longitude
      }
      topLevelDomains {
        _id
        name
        countries {
          name
        }
      }
      flag {
        svgFile
      }
    }
  }
`;
