import React from 'react';
import SessionContainer from './auth/session_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/" component={SessionContainer} />
  </div>
);

export default App;
