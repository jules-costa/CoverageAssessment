import React from 'react';
import Modal from 'react-modal';

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

  render() {
    return(
      <div>
        <button onClick={this.openModal}>Open</button>
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
            <h1>Auth Form</h1>
            <h4>I will only use your email to answer your insurance questions.
              You will not be solicited in any way.
              Your password is encrypted and protected on this site.
              I look forward to hearing from you!</h4>
            <label>First Name
              <input type="text"
                className="auth-field name"
                value={this.state.first_name}
                onChange={this.update('first_name')} />
            </label>
            <label>Last Name
              <input type="text"
                className="auth-field name"
                value={this.state.last_name}
                onChange={this.update('last_name')} />
            </label>
            <label>Email
              <input type="text"
                className="auth-field email"
                value={this.state.email}
                onChange={this.update('email')} />
            </label>
            <label>Password
              <input type="text"
                className="auth-field password"
                value={this.state.password}
                onChange={this.update('password')} />
            </label>
          </Modal>
        </div>
    );
  }
}

export default Session;
