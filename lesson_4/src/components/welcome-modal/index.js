import React from 'react';
import './welcome-modal.css';

const WelcomeModal = ({handleClose}) => {
  return (
    <div className="modal-back darkIn">
      <div className="modal fadeIn">
        <h2>Lorem Ipsum</h2>
        <hr/>
        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        <p>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is
          pain..."</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
};

export default WelcomeModal
