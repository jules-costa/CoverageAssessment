import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchAllPosts } from '../../actions/post_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => ({
  posts: values(state.posts)
});

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
