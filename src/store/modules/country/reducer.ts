import { Reducer } from 'redux';
import { ICountryState } from './types';

const INITIAL_STATE: ICountryState = {
  list: [],
};

const country: Reducer<ICountryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_COUNTRY_LIST': {
      const { countries } = action.payload;
      console.log(countries);
      return { list: countries };
    }
    default: {
      return state;
    }
  }
};

export default country;
