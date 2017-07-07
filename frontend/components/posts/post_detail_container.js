import { connect } from 'react-redux';
import PostDetail from './post_detail';
import { fetchPost, updatePost, destroyPost } from '../../actions/post_actions';

const selectPost = ({ posts }, id) => {
  const foundPost = posts[id];
  return foundPost || {};
};

const mapStateToProps = (state, { match }) => ({
  post: selectPost(state, parseInt(match.params.id)),
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  updatePost: post => dispatch(updatePost(post)),
  destroyPost: id => dispatch(destroyPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
