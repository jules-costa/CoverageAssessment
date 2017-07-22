import * as SessionAPIUtil from '../util/session_api_util';
import * as Err from './errors_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(currentUser => {
    dispatch(receiveCurrentUser(currentUser));
    dispatch(Err.clearErrors());
  }, err => (
    dispatch(Err.receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(currentUser => {
    dispatch(receiveCurrentUser(currentUser));
    dispatch(Err.clearErrors());
  }, err => (
    dispatch(Err.receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => {
    dispatch(receiveCurrentUser(null))
    return user;
  })
)
