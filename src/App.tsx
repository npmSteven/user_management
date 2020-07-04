import React from 'react';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Navbar from './components/layout/Navbar';
import { Register } from './components/auth/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Register />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
