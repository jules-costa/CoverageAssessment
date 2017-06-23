import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  openModal() {
    this.setState({ modalOpen: true })
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

  handleSubmit() {

  }

  render() {
    return(
      <div>
        { this.state.modalOpen === true ? "" : <button className="modal-button" onClick={this.openModal}>Sign Up / Log in</button> }
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          className={{
            base: 'myClass',
            afterOpen: 'myClass_after-open',
            beforeClose: 'myClass_before-close'
          }}
          overlayClassName={{
            base: 'myOverlayClass',
            afterOpen: 'myOverlayClass_after-open',
            beforeClose: 'myOverlayClass_before-close'
          }}
          >
            <h3 className="auth-form">Please {this.props.formType} or {this.navLink()}</h3>
              <section className="input-fields">
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
                <button className="modal-button" type="submit" onClick={this.handleSubmit}>Submit</button>
            </section>
              <h5 className="auth-form">I will only use your email to answer your insurance questions.
                You will not be solicited in any way.
                Your password is encrypted and protected on this site.
                I look forward to hearing from you!</h5>
          </Modal>
        </div>
    );
  }
}

export default Session;
