import React from 'react';
import SessionContainer from './auth/session_container';
import GreetingContainer from './greeting';
import PostIndexContainer from './posts/post_index_container';
import PostDetailContainer from './posts/post_detail_container';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} />
    <Route exact path="/login" component={SessionContainer} />
    <Route exact path="/signup" component={SessionContainer} />
    <Route exact path="/posts" component={PostIndexContainer} />
    <Route exact path="/posts/:id" component={PostDetailContainer} />
  </div>
);

export default App;
