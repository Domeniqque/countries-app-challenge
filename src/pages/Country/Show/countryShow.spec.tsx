import React from 'react';
import { act, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import CountryDetail from './index';
import {
  BRAZIL_DATA,
  COUNTRY_DATA_LIST,
} from '../../../resources/countryTestData';

jest.mock('../../../services/api/country', () => ({
  fetchNearCountries: jest.fn().mockResolvedValue([
    {
      countryName: 'Bolivia (Plurinational State of)',
      distanceInKm: 1333.0445603821204,
    },
    {
      countryName: 'Paraguay',
      distanceInKm: 1481.9677422904354,
    },
  ]),
}));

const mockStore = configureMockStore();

const setup = ({ countryId }: { countryId: string }) => {
  const store = mockStore({
    country: { list: COUNTRY_DATA_LIST },
  });

  const utils = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/country/${countryId}`]}>
        <Route path="/country/:id">
          <CountryDetail />
        </Route>
      </MemoryRouter>
    </Provider>,
  );

  return { ...utils };
};

describe('Country Details Page', () => {
  it('should render a country details correctly', async () => {
    await act(async () => {
      const { getByText, findByText } = setup({
        countryId: BRAZIL_DATA._id,
      });

      expect(getByText(/go back/i)).toBeInTheDocument();
      expect(await findByText(BRAZIL_DATA.name)).toBeInTheDocument();
    });
  });
});
