import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import data from '../data/data.json';

const appDiv = document.getElementById('app');
if (appDiv === null) {
  throw new Error('no app element');
}

render(<App data={data} />, appDiv);
