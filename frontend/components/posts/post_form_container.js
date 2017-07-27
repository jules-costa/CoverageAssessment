import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost, updatePost, destroyPost } from '../../actions/post_actions';

const mapStateToProps = (state) => ({
  errors: state.errors,
  currentUser: state.session,
  formType: (location.pathname === '/write' ? 'Write' : 'Edit')
});

const mapDispatchToProps = (dispatch, { location }) => {
  // createPost: (post) => dispatch(createPost(post)),
  // updatePost: (post) => dispatch(updatePost(post)),
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'write') ? createPost : updatePost;
  return {
    processForm: post => dispatch(processForm(post)),
    destroyPost: (post) => dispatch(destroyPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)
