import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';

import './index.css';

import App from './components';

import * as serviceWorker from './serviceWorker';

import { keysContainer } from './containers/keys';
import { roomContainer } from './containers/room';
import { usersContainer } from './containers/users';

ReactDOM.render(
  <Provider inject={[keysContainer, roomContainer, usersContainer]}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
