import React from 'react';
import {useGlobalContext} from './context';

const Modal = () => {
  const {handleModalClose, questions, score, modal} = useGlobalContext();
  return (
    <div className={`${modal ? 'modal-container isOpen' : 'modal-container'}`}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <h2>
          your score is "{((score / questions.length) * 100).toFixed(0)}"
          awesome!
        </h2>
        <button className="close-btn" onClick={handleModalClose}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
