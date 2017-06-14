import React from 'react';
import SessionContainer from './auth/session_container';
import GreetingContainer from './greeting';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} />
    <Route path="/auth" component={SessionContainer} />
  </div>
);

export default App;
