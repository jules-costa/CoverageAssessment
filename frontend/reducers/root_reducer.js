import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import postsReducer from './posts_reducer';
import postReducer from './post_detail_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  posts: postsReducer,
  post: postReducer
});

export default rootReducer;
