import React from 'react';
import { Link } from 'react-router-dom'
import * as SessionAPIUtil from '../../actions/session_actions';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.showAdditionalFields = this.showAdditionalFields.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }


  update(field) {
    return (e) => this.setState({ [field] : e.target.value });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>sign up instead</Link>;
    } else {
      return <Link to='/login'>log in instead</Link>;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("HERE");
    console.log(this.state);
    this.props.processForm(this.state)
  }

  showAdditionalFields() {
    if (this.props.formType === 'signup') {
      return (
        <div>
          <input type="text"
            className="auth-field name"
            placeholder="First name"
            value={this.state.first_name}
            onChange={this.update('first_name')} />
          <input type="text"
            className="auth-field name"
            placeholder="Last name"
            value={this.state.last_name}
            onChange={this.update('last_name')} />
        </div>
      )
    }
  }

  renderErrors() {
     return(
       <ul>
         {this.props.errors.map((error, i) => (
           <li key={`error-${i}`}>
             *** {error} ***
           </li>
         ))}
       </ul>
     );
   }

  render() {
    return(
      <div>
        <h3 className="auth-form">Please {this.props.formType} or {this.navLink()}</h3>
          <section className="input-fields">
            {this.showAdditionalFields()}
            <div>
              <input type="text"
                className="auth-field email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')} />
              <input type="password"
                className="auth-field password"
                placeholder="Password (min. 6 characters)"
                value={this.state.password}
                onChange={this.update('password')} />
            </div>
              <div className="session-errors">
                {this.renderErrors()}
              </div>
            <button className="modal-button" type="submit" onClick={this.handleSubmit}>Submit</button>
          </section>
          <h5 className="auth-form">I will only use your email to answer your insurance questions.
            You will not be solicited in any way.
            Your password is encrypted and protected on this site.
            I look forward to hearing from you!</h5>
        </div>
    );
  }
}

export default Session;
