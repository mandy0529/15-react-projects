import React from 'react';
import {useGlobalContext} from './context';

const Modal = () => {
  return (
    <div className="modal-container ">
      <h1>modal</h1>
      <div className="modal-content">
        <button className="close-btn"></button>
      </div>
    </div>
  );
};

export default Modal;
