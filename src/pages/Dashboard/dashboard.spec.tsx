import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';

import Dashboard from './index';
import { COUNTRY_DATA_LIST } from '../../resources/countryData';
import { ALL_COUNTRIES_QUERY } from '../../models/Country';

const apolloMock = [
  {
    request: {
      query: ALL_COUNTRIES_QUERY,
    },
    result: {
      data: {
        countries: COUNTRY_DATA_LIST,
      },
    },
  },
];

const setup = () => {
  const utils = render(
    <MockedProvider mocks={apolloMock} addTypename={false}>
      <Dashboard />
    </MockedProvider>,
    { wrapper: MemoryRouter },
  );

  const inputSearch = utils.getByLabelText(/search by country name/i);

  return { ...utils, inputSearch };
};

describe('Dashboard page', () => {
  it('should render countries', async () => {
    const { getByText, findAllByRole } = setup();

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect((await findAllByRole(/link/)).length).toBe(COUNTRY_DATA_LIST.length);
  });

  it('should search a country', async () => {
    const { inputSearch, findAllByRole, findByText } = setup();
    expect(await findByText(/Brazil/i)).toBeInTheDocument();

    fireEvent.change(inputSearch, { target: { value: 'Afghanistan' } });

    expect((inputSearch as HTMLInputElement).value).toBe('Afghanistan');

    expect(await findByText('Afghanistan')).toBeInTheDocument();
    expect((await findAllByRole(/link/)).length).toBe(1);
  });

  it('should return empty list if filter does not match', async () => {
    const { inputSearch, findAllByRole, queryByRole } = setup();

    expect((await findAllByRole(/link/)).length).toBe(COUNTRY_DATA_LIST.length);

    fireEvent.change(inputSearch, { target: { value: 'Dont match' } });

    expect((inputSearch as HTMLInputElement).value).toBe('Dont match');

    expect(queryByRole(/link/)).toBeNull();
  });
});
