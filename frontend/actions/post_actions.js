import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors, clearErrors, RECEIVE_ERRORS, CLEAR_ERRORS } from '../util/session_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const getPosts = () => dispatch => (
  PostAPIUtil.fetchAllPosts().then(posts => {
    dispatch(receiveAllPosts(posts));
    dispatch(clearErrors());
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
