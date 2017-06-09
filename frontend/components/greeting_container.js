import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Greeting);
