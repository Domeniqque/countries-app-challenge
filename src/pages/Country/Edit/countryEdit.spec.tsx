import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';

import EditCountry from './index';
import { COUNTRY_DATA_LIST } from '../../../resources/countryTestData';
import { IState } from '../../../store';
import actions from '../../../store/modules/country/actions';

const makeMockStore = configureMockStore();

const mockHistoryPush = jest.fn();
const mockHistoryGoBack = jest.fn();

jest.mock('react-router-dom', () => {
  const router = jest.requireActual('react-router-dom');

  return {
    ...router,
    useHistory: () => ({
      push: mockHistoryPush,
      goBack: mockHistoryGoBack,
    }),
  };
});

const setup = ({
  countryId,
  dataStore = COUNTRY_DATA_LIST,
}: {
  countryId: string;
  dataStore?: any;
}) => {
  const store = makeMockStore({
    country: { list: dataStore },
  } as IState);

  const utils = render(
    <MemoryRouter initialEntries={[`/country/${countryId}/edit`]}>
      <Route path="/country/:id/edit">
        <Provider store={store}>
          <EditCountry />
        </Provider>
      </Route>
    </MemoryRouter>,
  );

  const getInput = (label: string) =>
    utils.getByLabelText(label, { selector: 'input' }) as HTMLInputElement;

  const changeInput = (label: string, value: string) => {
    fireEvent.change(getInput(label), {
      target: { value },
    });
  };

  const getSubmitButton = () => utils.getByText(/save/i);

  return { ...utils, getInput, getSubmitButton, mockStore: store, changeInput };
};

const country = COUNTRY_DATA_LIST[0];

describe('CountryEdit page', () => {
  it('should render not found', () => {
    const { getByText } = setup({ countryId: country._id, dataStore: [] });

    expect(getByText(/not found/i)).toBeInTheDocument();
  });

  it('sould fill the form', async () => {
    await act(async () => {
      const { findByDisplayValue } = setup({ countryId: country._id });

      expect(await findByDisplayValue(country.name)).toBeInTheDocument();
      expect(await findByDisplayValue(country.capital)).toBeInTheDocument();
      expect(
        await findByDisplayValue(String(country.area)),
      ).toBeInTheDocument();
      expect(
        await findByDisplayValue(String(country.population)),
      ).toBeInTheDocument();
    });
  });

  it('should validate fields', async () => {
    await act(async () => {
      const { changeInput, getSubmitButton, findByText } = setup({
        countryId: country._id,
      });

      changeInput('Country Name', '');
      changeInput('Capital', '');
      changeInput('Area', '');
      changeInput('Population', '');

      fireEvent.click(getSubmitButton());

      expect(await findByText(/enter the name/i)).toBeInTheDocument();
      expect(await findByText(/enter the capital/i)).toBeInTheDocument();
      expect(await findByText(/enter the area/i)).toBeInTheDocument();
      expect(await findByText(/enter the population/i)).toBeInTheDocument();
    });
  });

  it('should save changes', async () => {
    const {
      findByDisplayValue,
      getSubmitButton,
      mockStore,
      changeInput,
    } = setup({
      countryId: country._id,
    });

    expect(await findByDisplayValue(country.name)).toBeInTheDocument();

    changeInput('Country Name', 'Country test');
    changeInput('Capital', 'Capital test');
    changeInput('Area', '9999');
    changeInput('Population', '9999');

    fireEvent.click(getSubmitButton());

    const expectedPayload = actions.updateCountry({
      id: country._id,
      data: {
        name: 'Country test',
        capital: 'Capital test',
        area: '9999',
        population: '9999',
      },
    });

    await waitFor(() =>
      expect(mockStore.getActions()).toStrictEqual([expectedPayload]),
    );

    expect(mockHistoryPush).toHaveBeenCalledWith(`/country/${country._id}`);
  });

  it('should send message on error saving', async () => {
    const toastErrorSpy = jest.spyOn(toast, 'error');
    jest.spyOn(actions, 'updateCountry').mockImplementation(() => {
      throw new Error('teste');
    });

    const { findByDisplayValue, getSubmitButton } = setup({
      countryId: country._id,
    });

    expect(await findByDisplayValue(country.name)).toBeInTheDocument();

    fireEvent.click(getSubmitButton());

    await waitFor(() => expect(toastErrorSpy).toBeCalledTimes(1));
  });

  it('shold redirect to back', async () => {
    const { getByText } = setup({
      countryId: country._id,
    });

    const backButton = getByText(/cancel/i);

    fireEvent.click(backButton);

    expect(mockHistoryGoBack).toHaveBeenCalledTimes(1);
  });
});
