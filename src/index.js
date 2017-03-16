import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App';
import './index.css';
import './assets/fonts/index.css';
import 'devicon';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
