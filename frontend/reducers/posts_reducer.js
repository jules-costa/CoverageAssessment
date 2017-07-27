import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
    if (action.post === undefined) {
      return merge({}, state, action.post);
    } else {
      const newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    }    default:
      return state;
  }
};

export default postsReducer;
