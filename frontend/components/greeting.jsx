import React from 'react';
import Modal from 'react-modal';

class Greeting extends React.Component {
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
            <h1> Modal content </h1>
          </Modal>
        </div>
    );
  }



}


export default Greeting;
