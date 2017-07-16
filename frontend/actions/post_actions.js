import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receiveSinglePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchPost = id => dispatch => (
  PostAPIUtil.fetchPost(id).then(post => dispatch(receiveSinglePost(post)))
);

export const updatePost = post => dispatch => (
  PostAPIUtil.updatePost(post).then(updatedPost => {
    dispatch(receiveSinglePost(updatedPost));
    dispatch(clearErrors());
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post).then(createdPost => {
    dispatch(receiveSinglePost(createdPost));
    dispatch(clearErrors());
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const destroyPost = id => dispatch => (
  PostAPIUtil.destroyPost(id).then(post => dispatch(receiveSinglePost(null)))
);

export const fetchAllPosts = categoryId => dispatch => (
  PostAPIUtil.fetchAllPosts(categoryId).then(posts => dispatch(receiveAllPosts(posts)))
);
