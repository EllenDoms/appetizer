import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import { CookiesProvider } from 'react-cookie';

import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<CookiesProvider>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
</CookiesProvider>,
  document.getElementById("root")
);
registerServiceWorker();
