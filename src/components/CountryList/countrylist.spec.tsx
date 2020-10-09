import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';

import { COUNTRY_DATA_LIST } from '../../resources/countryData';
import CountryList from './index';

describe('CountryList', () => {
  it('should render country items', () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <CountryList data={COUNTRY_DATA_LIST} />
      </BrowserRouter>,
    );

    COUNTRY_DATA_LIST.forEach(data => {
      expect(getByRole('img', { name: `${data.name} flag` })).toBeTruthy();
      expect(getByText(data.name)).toBeTruthy();
      expect(getByText(data.capital)).toBeTruthy();
    });
  });

  it('should redirect to country details page on click', () => {
    const countryData = COUNTRY_DATA_LIST[0];

    const { container, getByText, getByRole } = render(
      <BrowserRouter>
        <CountryList data={[countryData]} />
        <Route path={`/country/${countryData._id}`}>Country details</Route>
      </BrowserRouter>,
    );

    expect(getByText(new RegExp(countryData.name))).toBeInTheDocument();
    const linkElement = getByRole(/link/);

    fireEvent.click(linkElement);

    expect(container).toHaveTextContent(/Country details/);
  });
});
