import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const fetchPost = postId => dispatch => (

);

export const updatePost = post => dispatch => (

);

export const destroyPost = postId => dispatch => (

);


export const getPosts = categoryId => dispatch => (
  PostAPIUtil.fetchAllPosts(categoryId).then(posts => dispatch(receiveAllPosts(posts)))
);
