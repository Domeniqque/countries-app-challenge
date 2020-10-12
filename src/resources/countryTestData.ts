import { ICountry } from '../models/Country';
import { INearCountry } from '../services/api/country';

const COUNTRY_DATA_LIST: ICountry[] = [
  {
    _id: '561',
    name: 'Bolivia (Plurinational State of)',
    capital: 'Sucre',
    area: '1098581',
    population: '10985059',
    location: {
      latitude: -17,
      longitude: -65,
    },
    topLevelDomains: [
      {
        _id: '562',
        name: '.bo',
      },
    ],
    flag: {
      svgFile: 'https://restcountries.eu/data/bol.svg',
      emoji: '🇧🇴',
    },
  },
  {
    _id: '3278',
    name: 'Paraguay',
    capital: 'Asunción',
    area: '406752',
    population: '6854536',
    location: {
      latitude: -23,
      longitude: -58,
    },
    topLevelDomains: [
      {
        _id: '3279',
        name: '.py',
      },
    ],
    flag: {
      svgFile: 'https://restcountries.eu/data/pry.svg',
      emoji: '🇵🇾',
    },
  },
  {
    _id: '661',
    name: 'Brazil',
    capital: 'Brasília',
    area: '8515767',
    population: '206135893',
    location: {
      latitude: -10,
      longitude: -55,
    },
    topLevelDomains: [
      {
        _id: '662',
        name: '.br',
      },
    ],
    flag: {
      svgFile: 'https://restcountries.eu/data/bra.svg',
      emoji: '🇧🇷',
    },
  },
];

const BOLIVIA_DATA = COUNTRY_DATA_LIST[0];

const BRAZIL_DATA = COUNTRY_DATA_LIST[2];

const BRAZIL_COORDINATES: INearCountry = {
  countryName: 'Brazil',
  distanceInKm: 1481.9677422904354,
};

export { BOLIVIA_DATA, COUNTRY_DATA_LIST, BRAZIL_COORDINATES, BRAZIL_DATA };
