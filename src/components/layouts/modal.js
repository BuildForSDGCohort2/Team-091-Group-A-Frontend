import React from 'react'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h3 className="text-center">Make a Booking with Us</h3>
        {children}
        <button onClick={handleClose} className="btn btn-danger">Close</button>
      </section>
    </div>
  );
};

export default Modal;
