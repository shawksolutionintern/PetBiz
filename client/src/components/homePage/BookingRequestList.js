import React, { useState } from "react";
import AppointmentDetailModal from "./AppointmentDetailModal"; // Import the modal component
import ConfirmationModal from "./ConfirmationModal"; // Import the confirmation modal component

const BookingRequestList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Mock data for demonstration purposes
  const bookingRequests = [
    {
      id: 1,
      user: "Peter",
      service: "Dog Haircut",
      date: "Aug 10th at 10 AM",
    },
    {
      id: 2,
      user: "Matt",
      service: "Boarding",
      date: "Aug 12th at 11 AM",
    },
  ];

  const handleAccept = (request) => {
    setSelectedRequest(request);
    setConfirmAction("accept");
    setIsConfirmModalOpen(true);
  };

  const handleReject = (request) => {
    setSelectedRequest(request);
    setConfirmAction("reject");
    setIsConfirmModalOpen(true);
  };

  const handleConfirmAction = () => {
    if (confirmAction === "accept") {
      console.log(`Accepted request with id: ${selectedRequest.id}`);
    } else if (confirmAction === "reject") {
      console.log(`Rejected request with id: ${selectedRequest.id}`);
    }
    setIsConfirmModalOpen(false);
    setSelectedRequest(null);
  };

  const handleEdit = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  const handleCancelConfirm = () => {
    setIsConfirmModalOpen(false);
    setSelectedRequest(null);
  };

  return (
    <div className="booking-requests">
      <h2>Booking Requests</h2>
      {bookingRequests.map((request, index) => (
        <div key={index} className="booking-request">
          <div className="request-header">
            <div className="request-user">
              <div className="user-icon">{request.user.charAt(0)}</div>
              <div className="user-name">{request.user}</div>
            </div>
            <div className="request-details">
              <div className="request-title">{request.service}</div>
              <div className="request-time">{request.date}</div>
            </div>
          </div>
          <div className="request-buttons">
            <button onClick={() => handleAccept(request)}>Accept</button>
            <button onClick={() => handleReject(request)}>Reject</button>
            <button onClick={() => handleEdit(request)}>Edit</button>
          </div>
        </div>
      ))}
      {isModalOpen && selectedRequest && (
        <AppointmentDetailModal
          request={selectedRequest}
          onClose={handleCloseModal}
        />
      )}
      {isConfirmModalOpen && (
        <ConfirmationModal
          message={`Are you sure you want to ${confirmAction} this booking request?`}
          onConfirm={handleConfirmAction}
          onCancel={handleCancelConfirm}
        />
      )}
    </div>
  );
};

export default BookingRequestList;






