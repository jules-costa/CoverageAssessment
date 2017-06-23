import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';
import { fetchAllPosts } from './util/post_api_util';

window.fetchAllPosts = fetchAllPosts();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  Modal.setAppElement(document.body);
  window.store = configureStore();
  ReactDOM.render(<Root store={ store } />, root);
});
