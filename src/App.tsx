import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import { Routes } from './components/routing/Routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
