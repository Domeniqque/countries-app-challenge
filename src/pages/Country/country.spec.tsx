import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route } from 'react-router-dom';

import CountryDetail from './index';
import { COUNTRY_DATA } from '../../resources/countryData';
import { FIND_COUNTRY_QUERY } from '../../models/Country';

const apolloMock = [
  {
    request: {
      query: FIND_COUNTRY_QUERY,
      variables: {
        id: COUNTRY_DATA._id,
      },
    },
    result: {
      data: {
        countries: [COUNTRY_DATA],
      },
    },
  },
];

const setup = ({ countryId }: { countryId: string }) => {
  const utils = render(
    <MockedProvider mocks={apolloMock} addTypename={false}>
      <MemoryRouter initialEntries={[`/country/${countryId}`]}>
        <Route path="/country/:id">
          <CountryDetail />
        </Route>
      </MemoryRouter>
    </MockedProvider>,
  );

  return { ...utils };
};

describe('Country Details Page', () => {
  it('should render a country', async () => {
    const countryId = COUNTRY_DATA._id;
    const { getByText, findByText } = setup({ countryId });

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(await findByText(COUNTRY_DATA.name)).toBeInTheDocument();
  });
});
