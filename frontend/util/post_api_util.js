export const fetchAllPosts = (categoryId) => (
  $.ajax({
    method: "GET",
    url: "api/posts",
    data: {categoryId}
  })
);
