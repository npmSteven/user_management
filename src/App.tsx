import React from 'react';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Navbar from './components/layout/Navbar';
import { Users } from './components/Users/Users';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Users />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
