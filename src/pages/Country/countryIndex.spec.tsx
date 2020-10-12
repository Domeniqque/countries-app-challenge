/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import CountryList from './index';
import { store } from '../../store';

jest.mock('../../services/api/country', () => ({
  fetchCountryList: jest.fn().mockResolvedValue({
    countries: [
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
    ],
  }),
  fetchNearCountries: jest.fn().mockResolvedValue({
    data: {
      country: [
        {
          distanceToOtherCountries: [
            {
              countryName: 'Bolivia (Plurinational State of)',
              distanceInKm: 1333.0445603821204,
            },
            {
              countryName: 'Paraguay',
              distanceInKm: 1481.9677422904354,
            },
            {
              countryName: 'Suriname',
              distanceInKm: 1562.413522321208,
            },
            {
              countryName: 'French Guiana',
              distanceInKm: 1574.1741073802189,
            },
            {
              countryName: 'Guyana',
              distanceInKm: 1727.7054803482656,
            },
          ],
        },
      ],
    },
  }),
}));

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <MemoryRouter>
        <CountryList />
      </MemoryRouter>
    </Provider>,
  );

  const inputSearch = utils.getByLabelText(
    /search by country name/i,
  ) as HTMLInputElement;

  return { ...utils, inputSearch };
};

describe('CountryList page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render countries', async () => {
    await act(async () => {
      const { getByRole, findAllByTestId } = setup();
      const loadingContainer = getByRole('alert');
      expect(loadingContainer).toBeInTheDocument();
      expect(loadingContainer.getAttribute('aria-busy')).toBe('true');

      expect((await findAllByTestId(/country-item/)).length).toBe(3);

      expect(loadingContainer.getAttribute('aria-busy')).toBe('false');
    });
  });

  it('should search a country', async () => {
    await act(async () => {
      const { inputSearch, findAllByTestId, findByText } = setup();

      expect(await findByText(/Brazil/i)).toBeInTheDocument();

      fireEvent.change(inputSearch, { target: { value: 'Afghanistan' } });

      expect(inputSearch.value).toBe('Afghanistan');

      expect(await findByText('Afghanistan')).toBeInTheDocument();
      expect((await findAllByTestId(/country-item/)).length).toBe(1);
    });
  });

  it('should return empty list if filter does not match', async () => {
    await act(async () => {
      const { inputSearch, findAllByTestId, queryByTestId } = setup();

      expect((await findAllByTestId(/country-item/)).length).toBe(3);

      fireEvent.change(inputSearch, { target: { value: 'Dont match' } });

      expect(inputSearch.value).toBe('Dont match');
      expect(queryByTestId(/country-item/)).toBeNull();
    });
  });
});
