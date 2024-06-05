import React from "react";
import { PiWarningCircle } from "react-icons/pi";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlaya">
      <div className="modal-contenta">
        <div className="modal-icona"><PiWarningCircle /></div>
        <p>{message}</p>
        <div className="modal-buttonsa">
          <button className="cancel-buttona" onClick={onCancel}>Cancel</button>
          <button className="ok-buttona" onClick={onConfirm}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
