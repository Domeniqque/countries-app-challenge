import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import CountryDetail, { ICountryDetail } from './index';
import { BOLIVIA_DATA } from '../../resources/countryTestData';

const setup = (param?: ICountryDetail) => {
  const utils = render(<CountryDetail {...param} />, { wrapper: MemoryRouter });

  return { ...utils };
};

describe('CountryDetail', () => {
  it('should not found', () => {
    const { getByText } = setup({ country: undefined });

    expect(getByText(/not found/i)).toBeInTheDocument();
  });

  it('should render country detail', () => {
    const country = BOLIVIA_DATA;
    const { queryByText, getByRole, getByText } = setup({
      country,
    });

    expect(queryByText(/not found/i)).toBeNull();
    expect(getByRole(/img/).getAttribute('src')).toBe(country.flag.svgFile);
    expect(getByText(country.name)).toBeInTheDocument();
  });

  it('render correctly details', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <CountryDetail country={BOLIVIA_DATA} />
        </MemoryRouter>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
