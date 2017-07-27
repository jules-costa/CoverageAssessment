import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost, updatePost, destroyPost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors,
    currentUser: state.session
  });
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'write') ? createPost : updatePost;
  return {
    processForm: post => dispatch(processForm(post)),
    destroyPost: (post) => dispatch(destroyPost(post)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)
