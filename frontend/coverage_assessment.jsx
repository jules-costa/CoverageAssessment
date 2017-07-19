import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';

import { createPost } from './actions/post_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  Modal.setAppElement(document.body);
  window.store = configureStore();
  window.createPost = createPost;
  ReactDOM.render(<Root store={ store } />, root);
});
