import React, { useState } from "react";
import Modal from "./modal";

const Test = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <main>
      <h1>React Modal</h1>
      <Modal show={show} handleClose={hideModal}>
        <p>Modal</p>
        <p>Data</p>
      </Modal>
      <button type="button" onClick={showModal}>
        open
      </button>
      <button type="button" onClick={showModal}>
        open
      </button>
      <button type="button" onClick={showModal}>
        open
      </button>
    </main>
  );
};

export default Test;
