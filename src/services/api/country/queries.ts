import { gql } from '@apollo/client';

export const GET_COUNTRIES_QUERY = gql`
  query {
    countries: Country(orderBy: name_asc) {
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
      }
      flag {
        svgFile
        emoji
      }
    }
  }
`;

export const GET_NEAR_COUNTRIES = gql`
  query CountryDistance($id: String) {
    country: Country(_id: $id) {
      distanceToOtherCountries(first: 5) {
        distanceInKm
        countryName
      }
    }
  }
`;
