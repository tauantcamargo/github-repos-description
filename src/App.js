import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import React from 'react';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
