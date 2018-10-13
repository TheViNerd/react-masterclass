import React from 'react';
import { Subscribe } from 'unstated';

import KeysContainer from '../containers/keys';
import RoomContainer from '../containers/room';
import Piano from './Piano';


import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Subscribe to={[KeysContainer, RoomContainer]}>
          {(keys, room) => (
            <Piano keys={keys} room={room} />
          )}
        </Subscribe>
      </div>
    );
  }
}

export default App;
