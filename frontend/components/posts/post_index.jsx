import React from 'react';
import PostIndexItem from './post_index_item';
import NavbarContainer from '../navbar/navbar_container';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return(
      <div>
        <NavbarContainer />
        <section className="behind-feed">
          <div className="feed-wrapper">
            <section className="feed">
              {this.props.posts.map((post, i) => <PostIndexItem key={post.id} post={post} />)}
            </section>
          </div>
        </section>

      </div>
    );
  }
}


export default PostIndex;
