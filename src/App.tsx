import React from 'react';
import { Container } from 'semantic-ui-react';

import Navbar from './components/layout/Navbar';
import { Login } from './components/auth/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Login />
      </Container>
    </div>
  );
}

export default App;
