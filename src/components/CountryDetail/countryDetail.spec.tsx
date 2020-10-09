import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import CountryDetail, { ICountryDetail } from './index';
import { COUNTRY_DATA } from '../../resources/countryData';

const setup = (param?: ICountryDetail) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const utils = render(<CountryDetail {...param} />, { wrapper: MemoryRouter });

  return { ...utils };
};

describe('CountryDetail', () => {
  it('should render loading', () => {
    const { getByText } = setup({ loading: true, country: undefined });

    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render country detail', () => {
    const country = COUNTRY_DATA;
    const { queryByText, getByRole, getByText } = setup({
      loading: false,
      country,
    });

    expect(queryByText(/loading/i)).toBeNull();
    expect(getByRole(/img/).getAttribute('src')).toBe(country.flag.svgFile);
    expect(getByText(country.name)).toBeInTheDocument();
  });

  it('render correctly details', () => {
    const component = renderer
      .create(<CountryDetail country={COUNTRY_DATA} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
