import { ICountry } from '../models/Country';

const COUNTRY_DATA_LIST: ICountry[] = [
  {
    _id: '3',
    name: 'Afghanistan',
    capital: 'Kabul',
    area: 652230,
    population: 27657145,
    location: {
      latitude: 33,
      longitude: 65,
    },
    topLevelDomains: [
      {
        _id: '4',
        name: '.af',
      },
    ],
    flag: {
      svgFile: 'https://restcountries.eu/data/afg.svg',
      emoji: '🇦🇫',
    },
  },
  {
    _id: '641',
    name: 'Bouvet Island',
    capital: '',
    area: 49,
    population: 0,
    location: {
      latitude: -54.43333333,
      longitude: 3.4,
    },
    topLevelDomains: [
      {
        _id: '642',
        name: '.bv',
      },
    ],
    flag: {
      svgFile: 'https://restcountries.eu/data/bvt.svg',
      emoji: '🇧🇻',
    },
  },
  {
    _id: '661',
    name: 'Brazil',
    capital: 'Brasília',
    area: 8515767,
    population: 206135893,
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

const COUNTRY_DATA = COUNTRY_DATA_LIST[0];

export { COUNTRY_DATA, COUNTRY_DATA_LIST };
