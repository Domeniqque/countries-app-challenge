import { AnyAction } from 'redux';
import { COUNTRY_DATA_LIST } from '../../../resources/countryTestData';
import actions from './actions';
import reducer, { getInitialState } from './reducer';
import { ICountryState } from './types';

const country1 = COUNTRY_DATA_LIST[0];
const country2 = COUNTRY_DATA_LIST[1];
const country3 = COUNTRY_DATA_LIST[2];

describe('Country reducer', () => {
  it('should return the initial state', () => {
    const initialState = getInitialState();
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it('should handle ADD_COUNTRY_LIST', () => {
    const initialState: ICountryState = {
      list: [],
      total: 0,
    };

    const expectedState: ICountryState = {
      list: [country1, country2],
      total: 2,
    };

    expect(
      reducer(initialState, actions.addCountryList([country1, country2])),
    ).toEqual(expectedState);
  });

  it('should handle UPDATE_COUNTRY_DATA', () => {
    const initialState: ICountryState = {
      list: [country1, country2, country3],
      total: 3,
    };

    const updatedData = {
      name: 'Test',
      capital: 'Capital test',
      area: '9999',
      population: '9999',
    };

    const expectedState: ICountryState = {
      list: [
        country1,
        country2,
        {
          ...country3,
          ...updatedData,
        },
      ],
      total: 3,
    };

    expect(
      reducer(
        initialState,
        actions.updateCountry({ id: country3._id, data: updatedData }),
      ),
    ).toEqual(expectedState);
  });

  it('should not update data if country not found on handle UPDATE_COUNTRY_DATA', () => {
    const initialState: ICountryState = {
      list: [country1, country2, country3],
      total: 3,
    };

    const updatedData = {
      name: 'Test',
      capital: 'Capital test',
      area: '9999',
      population: '9999',
    };

    const expectedState: ICountryState = {
      list: [country1, country2, country3],
      total: 3,
    };

    expect(
      reducer(
        initialState,
        actions.updateCountry({ id: 'invalid', data: updatedData }),
      ),
    ).toEqual(expectedState);
  });
});
