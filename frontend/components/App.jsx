import React from 'react';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/" component={GreetingContainer} />
  </div>
);

export default App;
