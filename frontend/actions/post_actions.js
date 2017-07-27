import * as PostAPIUtil from '../util/post_api_util';
import * as Err from './errors_actions';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receiveSinglePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPost = id => dispatch => (
  PostAPIUtil.fetchPost(id).then(post => dispatch(receiveSinglePost(post)))
);

export const updatePost = post => dispatch => (
  PostAPIUtil.updatePost(post).then(updatedPost => {
    dispatch(receiveSinglePost(updatedPost));
    dispatch(Err.clearErrors());
    return updatedPost;
  }, err => (
    dispatch(Err.receiveErrors(err.responseJSON))
  ))
);

export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post).then(createdPost => {
    dispatch(receiveSinglePost(createdPost));
    dispatch(Err.clearErrors());
    return createdPost;
  }, err => (
    dispatch(Err.receiveErrors(err.responseJSON))
  ))
);

export const destroyPost = id => dispatch => (
  PostAPIUtil.destroyPost(id).then(post => dispatch(receiveSinglePost(null)))
);

export const fetchAllPosts = categoryId => dispatch => (
  PostAPIUtil.fetchAllPosts(categoryId).then(posts => dispatch(receiveAllPosts(posts)))
);
