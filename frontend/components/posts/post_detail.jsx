import React from 'react';
import { withRouter } from 'react-router-dom';

class PostDetail extends React.Component {
  //
  // componentDidMount() {
  //   this.props.fetchPost(1)
  // }

  render() {
    return (
      <div>
        {this.props.post.title}
        {this.props.post.body}
      </div>
    )
  }
}

export default withRouter(PostDetail);
