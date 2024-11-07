import React, { useState } from "react";
import Nav from "./Nav";

const Modal = () => {
  const [show, setShow] = useState(false);
  const click = () => {
    setShow(!show);
  };
  return (
    <>
      <Nav />
      <button onClick={click}>Show</button>
      {show && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Modal Dialog</h2>
            <p>
              Hi Niggas Iam Builing <br /> a Modal using React
            </p>
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
