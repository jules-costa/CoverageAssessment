import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const PostIndexItem = ({ post }) => (
    <section className="feed-item-wrapper">
      <section>
        <Link to={`/posts/${post.id}`}>
          <h1 className="post-title-index">{post.title}</h1>
        </Link>
        <h4 className="post-body-index">{ ReactHtmlParser(post.truncatedBody) }</h4>
      </section>
    </section>
);

export default PostIndexItem;
