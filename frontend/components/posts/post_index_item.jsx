import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post }) => (
    <section className="feed-item-wrapper">
      <section>
        <Link to={`/posts/${post.id}`}>
          <h1 className="post-title">{post.title}</h1>
        </Link>
        <h4 className="post-body">{post.truncatedBody}</h4>
      </section>
    </section>
);

export default PostIndexItem;
