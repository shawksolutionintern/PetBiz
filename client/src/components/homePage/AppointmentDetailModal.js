import React from "react";
import { BsChatRightDots } from "react-icons/bs";

const AppointmentDetailModal = ({ request, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Appointment Detail</h2>
        <div className="modal-body">
          <div className="service-info">
            <h3>Service Info</h3>
            <p><strong>Service:</strong> {request.service}</p>
            <p><strong>Date:</strong> {request.date}</p>
            <p><strong>Client:</strong> Brandon</p>
            <p><strong>Price:</strong> $80</p>
            <div className="client-note">
              <BsChatRightDots />
              <p>Client might be arrived earlier than scheduled time.</p>
            </div>
            <h4>Service Process</h4>
            <div className="process-icons">
              <span className="process-icon">✓</span>
              <span className="process-icon">→</span>
              <span className="process-icon">... etc.</span>
            </div>
            <button className="check-in-button">Check in</button>
          </div>
          <div className="client-pet-info">
            <div className="client-info">
              <h3>Client Info</h3>
              <p><strong>Name:</strong> Elizabeth Cooke</p>
              <p><strong>Phone:</strong> 123-345-4567</p>
              <p><strong>Email:</strong> abc123@gmail.com</p>
              <p><strong>ID:</strong> B602138005</p>
            </div>
            <div className="pet-info">
              <h3>Pet Info</h3>
              <p><strong>Name:</strong> Cola</p>
              <p><strong>Breed:</strong> Golden retriever</p>
              <p><strong>DOB:</strong> 10/01/2022</p>
              <p><strong>Gender:</strong> Female</p>
              <p><strong>Weight:</strong> 56 lbs</p>
              <div className="pet-image">Pet Image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailModal;
