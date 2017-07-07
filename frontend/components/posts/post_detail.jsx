import React from 'react';
import { withRouter } from 'react-router-dom';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchPost(nextProps.match.params.id);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="feed-wrapper">
        <h1 className="post-title">{this.props.post.title}</h1>
        <h4 className="post-body">{this.props.post.body}</h4>
      </div>
    )
  }
}

export default withRouter(PostDetail);
