import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import CountryDetail from './index';
import { COUNTRY_DATA_LIST } from '../../../resources/countryTestData';

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
  it('should render a country', async () => {
    const country = COUNTRY_DATA_LIST[0];
    const { getByText, findByText } = setup({ countryId: country._id });

    expect(getByText(/go back/i)).toBeInTheDocument();
    expect(await findByText(country.name)).toBeInTheDocument();
  });
});
