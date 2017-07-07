import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return action.post;
    default:
      return state;
  }
};

export default postsReducer;
