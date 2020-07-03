import React from 'react';
import { useSelector } from 'react-redux';

import State from './models/state';

function App() {

  const auth = useSelector((state: State) => state.auth);
  return (
    <div className="App">
      <p>Auth State: { JSON.stringify(auth) }</p>
    </div>
  );
}

export default App;
