import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge'

const sessionReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    console.log(action.currentUser);
    debugger
      return action.currentUser;
    default:
      return state;
  }
};

export default sessionReducer;
