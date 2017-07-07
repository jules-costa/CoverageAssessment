export const fetchAllPosts = (categoryId) => (
  $.ajax({
    method: "GET",
    url: "/api/posts",
    data: {categoryId}
  })
);

export const fetchPost = (postId) => (
  $.ajax({
    method: "GET",
    url: `/api/posts/${postId}`
  })
);
