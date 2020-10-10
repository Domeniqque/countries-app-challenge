import { createStore } from 'redux';
import { ICountryState } from './modules/country/types';

import rootReducer from './modules/rootReducer';

export interface IState {
  country: ICountryState;
}

const store = createStore(rootReducer);

export default store;
