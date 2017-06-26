import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
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

export const destroyPost = id => dispatch => (
  APostPIUtil.destroyPost(id).then(post => dispatch(receiveSinglePost(null)))
);


export const getPosts = categoryId => dispatch => (
  PostAPIUtil.fetchAllPosts(categoryId).then(posts => dispatch(receiveAllPosts(posts)))
);
