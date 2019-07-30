import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducersRoot from './reducers/reducer';

import App from './components/App';

const store = createStore(reducersRoot);

window.addEventListener('hashchange', (e) => { console.log('hash changed'); });
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
