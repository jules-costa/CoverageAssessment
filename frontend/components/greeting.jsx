import React from 'react';
import Modal from 'react-modal';

class Greeting extends React.Component {
  constructor() {
    super();
  }


  <Modal
    isOpen={bool}
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
  
}


export default Greeting;
