/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import CountryList from './index';
import store from '../../store';

jest.mock('../../services/api/country', () => ({
  fetchCountries: jest.fn().mockResolvedValue({
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
      const { getByText, findAllByRole } = setup();

      expect(getByText(/loading/i)).toBeInTheDocument();
      expect((await findAllByRole(/link/)).length).toBe(3);
    });
  });

  it('should search a country', async () => {
    await act(async () => {
      const { inputSearch, findAllByRole, findByText } = setup();

      expect(await findByText(/Brazil/i)).toBeInTheDocument();

      fireEvent.change(inputSearch, { target: { value: 'Afghanistan' } });

      expect(inputSearch.value).toBe('Afghanistan');

      expect(await findByText('Afghanistan')).toBeInTheDocument();
      expect((await findAllByRole(/link/)).length).toBe(1);
    });
  });

  it('should return empty list if filter does not match', async () => {
    await act(async () => {
      const { inputSearch, findAllByRole, queryByRole } = setup();

      expect((await findAllByRole(/link/)).length).toBe(3);

      fireEvent.change(inputSearch, { target: { value: 'Dont match' } });

      expect(inputSearch.value).toBe('Dont match');
      expect(queryByRole(/link/)).toBeNull();
    });
  });
});
