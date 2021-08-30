import React from 'react';
import {FaTimes} from 'react-icons/fa';
import {useGlobalContext} from './AppContext';
const Modal = () => {
  const {modal, closeModal} = useGlobalContext();
  return (
    <div className={`modal-overlay ${modal && 'show-modal'} `}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
