import { ICountry } from '../models/Country';

const COUNTRY_DATA: ICountry = {
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
      _id: '43',
      name: '.af',
      countries: [
        {
          _id: '4',
          name: 'Afghanistan',
        },
      ],
    },
  ],
  flag: {
    svgFile: 'https://restcountries.eu/data/afg.svg',
    emoji: '🇦🇫',
  },
};

const COUNTRY_DATA_LIST: ICountry[] = [
  {
    _id: '3',
    name: 'Afghanistan',
    capital: 'Kabul',
    flag: {
      emoji: '🇦🇫',
    },
  },
  {
    _id: '27',
    name: 'Åland Islands',
    capital: 'Mariehamn',
    flag: {
      emoji: '🇦🇽',
    },
  },
  {
    _id: '661',
    name: 'Brazil',
    capital: 'Brasília',
    flag: {
      emoji: '🇧🇷',
    },
  },
];

export { COUNTRY_DATA, COUNTRY_DATA_LIST };
