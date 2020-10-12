import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';

import { COUNTRY_DATA_LIST } from '../../resources/countryTestData';
import CountryList from './index';

const setup = (
  data = COUNTRY_DATA_LIST,
  countryId?: string,
  loading = false,
) => {
  const utils = render(
    <BrowserRouter>
      <CountryList data={data} loading={loading} />
      {countryId && (
        <Route path={`/country/${countryId}`}>Country details</Route>
      )}
    </BrowserRouter>,
  );

  return utils;
};

describe('CountryList Component', () => {
  it('should render loading component', () => {
    const { getByRole } = setup([], undefined, true);

    const loadingContainer = getByRole('alert');

    expect(loadingContainer).toBeInTheDocument();
    expect(loadingContainer.getAttribute('aria-busy')).toBe('true');
  });

  it('should render country items', () => {
    const { getByText, getByRole } = setup();

    COUNTRY_DATA_LIST.forEach(data => {
      expect(getByRole('img', { name: `${data.name} flag` })).toBeTruthy();
      expect(getByText(data.name)).toBeTruthy();
    });
  });

  it('should redirect to country details page on click', () => {
    const countryData = COUNTRY_DATA_LIST[0];

    const { container, getByText, getByRole } = setup(
      [countryData],
      countryData._id,
    );

    expect(getByText(new RegExp(countryData.name))).toBeInTheDocument();
    const linkElement = getByRole(/link/);

    fireEvent.click(linkElement);

    expect(container).toHaveTextContent(/country details/i);
  });
});
