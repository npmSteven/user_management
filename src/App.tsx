import React from 'react';

import Navbar from './components/layout/Navbar';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { SET_AUTH } from './actions/types';

function App() {
  const dispatch = useDispatch();

  // const { status } = useSelector((state: any) => state.auth);

  const handleAuth = () => {
    dispatch({ type: SET_AUTH, auth: { status: 'authorized' } });
  }

  return (
    <div>
      <Navbar />
      <Button onClick={handleAuth} content="Login"></Button>
    </div>
  );
}

export default App;
