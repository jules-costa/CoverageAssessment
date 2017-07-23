import React from 'react';
import SessionContainer from './auth/session_container';
import GreetingContainer from './greeting';
import PostIndexContainer from './posts/post_index_container';
import PostDetailContainer from './posts/post_detail_container';
import PostFormContainer from './posts/post_form_container';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div className="route-wrapper">
    <Route exact path="/" component={PostIndexContainer} />
    <Route exact path="/about" component={GreetingContainer} />
    <Route exact path="/login" component={SessionContainer} />
    <Route exact path="/signup" component={SessionContainer} />
    <Route exact path="/posts/:id" component={PostDetailContainer} />
    <Route exact path="/write" component={PostFormContainer} />
  </div>
);

export default App;
