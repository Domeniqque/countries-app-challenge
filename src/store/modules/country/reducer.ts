import { Reducer } from 'redux';
import produce from 'immer';
import { ICountryState } from './types';

const INITIAL_STATE: ICountryState = {
  list: [],
};

const country: Reducer<ICountryState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_COUNTRY_LIST': {
        const { countries } = action.payload;

        draft.list = countries;

        return draft;
      }
      default: {
        return draft;
      }
    }
  });
};

export default country;
