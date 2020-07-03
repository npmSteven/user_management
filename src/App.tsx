import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { SET_AUTH } from './actions/types';

function App() {
  const dispatch = useDispatch();

  const { status } = useSelector((state: any) => state.auth);

  const handleAuth = () => {
    dispatch({ type: SET_AUTH, auth: { status: 'authenticated' } });
  }

  return (
    <div className="App">
      <p>Auth State: { status }</p>
      <Button onClick={handleAuth} content="Login"></Button>
    </div>
  );
}

export default App;
