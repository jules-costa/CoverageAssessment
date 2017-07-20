import { connect } from 'react-redux';
import Session from './session';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedId: Boolean(state.currentUser),
  errors: state.errors,
  formType: (location.pathname === '/login' ? 'Login' : 'Signup')
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
    // login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
