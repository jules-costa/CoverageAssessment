import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    debugger;
    return(
      <div className="feed-wrapper">
        <section className="feed">
          {this.props.posts.map((post, i) => <PostIndexItem key={post.id} post={post} />)}
        </section>
      </div>
    );
  }
}


export default PostIndex;
