import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import NavbarContainer from '../navbar/navbar_container';

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
    return (
      <section>
        <NavbarContainer />
        <div className="feed-wrapper">
          <h1 className="post-title">{this.props.post.title}</h1>
          <h4 className="post-body">{ ReactHtmlParser(this.props.post.body) }</h4>
        </div>
      </section>
    );
  }
}

export default withRouter(PostDetail);
