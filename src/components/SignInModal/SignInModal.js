import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import signin from '../../assets/signin.png'
import './SignInModal.css'

const SignInModal = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='modal-header' closeButton>
          <p className='modal-title' id="contained-modal-title-vcenter">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
          </p>
        </Modal.Header>
        <div className='d-flex w-75 mx-auto'>
         <div>
            <div className='field-area'>
            <input className='d-block field' placeholder='Email' />
            </div >
           <div  className='field-area'> <input className='d-block field' placeholder='Password' /></div>
         </div>
         <div>
            <img src={signin} alt=''/>
         </div>
            
        </div>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default SignInModal;