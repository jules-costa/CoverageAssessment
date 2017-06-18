import { connect } from 'react-redux';
import PostIndex from './post_index';
import { getPosts } from '../../actions/post_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => ({
  posts: values(state.posts)
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
