import { Reducer } from 'redux';
import produce from 'immer';

import { actionTypes, ICountryState } from './types';

const { ADD_COUNTRY_LIST, UPDATE_COUNTRY_DATA } = actionTypes;

export const getInitialState = (): ICountryState => ({
  list: [],
  total: 0,
});

const countryReducer: Reducer<ICountryState> = (
  state = getInitialState(),
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_COUNTRY_LIST: {
        const { countries, total } = action.payload;

        draft.list = countries;
        draft.total = total;

        return draft;
      }

      case UPDATE_COUNTRY_DATA: {
        const { id, data } = action.payload;

        const country = state.list.find(a => a._id === id);

        if (country) {
          const countryIndex = state.list.indexOf(country);

          draft.list.splice(countryIndex, 1, {
            ...country,
            ...data,
          });
        }

        return draft;
      }

      default: {
        return draft;
      }
    }
  });
};

export default countryReducer;
