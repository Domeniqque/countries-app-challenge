import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';
import { persistor, store } from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyles />

    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
    <ToastContainer />
  </Provider>
);

export default App;
