import React from 'react';
import { render } from '@testing-library/react';

import CountryList from './index';

const COUNTRY_DATA = [
  {
    _id: '1',
    name: 'Afghanistan',
    capital: 'Kabul',
    flag: {
      emoji: '🇦🇫',
    },
  },
  {
    _id: '2',
    name: 'Albania',
    capital: 'Tirana',
    flag: {
      emoji: '🇦🇱',
    },
  },
  {
    _id: '3',
    name: 'Algeria',
    capital: 'Algiers',
    flag: {
      emoji: '🇩🇿',
    },
  },
];

describe('CountryList', () => {
  it('should render country items', () => {
    const { getAllByRole, getByText, getByRole } = render(
      <CountryList data={COUNTRY_DATA} />,
    );
    const items = getAllByRole(/button/);

    expect(items).toHaveLength(COUNTRY_DATA.length);

    COUNTRY_DATA.forEach(data => {
      expect(getByRole('img', { name: `${data.name} flag` })).toBeTruthy();
      expect(getByText(data.name)).toBeTruthy();
      expect(getByText(data.capital)).toBeTruthy();
    });
  });
});
