import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ICountryState } from './modules/country/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  country: ICountryState;
}

const persistConfig = {
  key: '@CountriesAppRoot',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
