import React, { useState } from "react";
import AppointmentDetailModal from "./AppointmentDetailModal";
import EditAppointmentModal from "./EditAppointmentModal";
import ConfirmationModal from "./ConfirmationModal"; 
import './css/BookingRequestList.css';

const BookingRequestList = () => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Mock data for demonstration purposes
  const bookingRequests = [
    {
      id: 1,
      user: "Peter",
      service: "Dog Haircut",
      date: "Aug 10",
      time: "10AM",
      duration: "60",
      employee: "Brandon",
      notes: "Client might arrive earlier than scheduled time.",
      clientName: "Elizabeth Cooke",
      phone: "123-345-4567",
      email: "abc123@gmail.com",
      loyaltyCard: "B602138005",
      petName: "Cola",
      petType: "Golden retriever",
      dob: "10/01/2022",
      gender: "Female",
      weight: "56"
    },
    {
      id: 2,
      user: "Matt",
      service: "Boarding",
      date: "Aug 12",
      time: "11 AM",
      duration: "60",
      employee: "Brandon",
      notes: "Client might arrive earlier than scheduled time.",
      clientName: "Matt Smith",
      phone: "987-654-3210",
      email: "matt123@gmail.com",
      loyaltyCard: "A123456789",
      petName: "Bella",
      petType: "Cat",
      dob: "05/15/2020",
      gender: "Male",
      weight: "12"
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
    setIsEditModalOpen(true);
  };

  const handleViewDetail = (request) => {
    setSelectedRequest(request);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedRequest(null);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedRequest(null);
  };

  const handleCancelConfirm = () => {
    setIsConfirmModalOpen(false);
    setSelectedRequest(null);
  };

  return (
    <div className="booking-requests">
      {bookingRequests.map((request, index) => (
        <div key={index} className="booking-request">
          <h3 className="request-title">Booking Request {request.id}</h3>
          <div className="request-content">
            <div className="request-user">
              <div className="user-icon">{request.user.charAt(0)}</div>
            </div>
            <div className="request-details" onClick={() => handleViewDetail(request)}>
              <div className="service-name">{request.service}</div>
              <div className="request-time">{request.date} at {request.time}</div>
            </div>
          </div>
          <div className="request-buttons">
            <button onClick={() => handleAccept(request)} className="accept">Accept</button>
            <button onClick={() => handleReject(request)} className="reject">Reject</button>
            <button onClick={() => handleEdit(request)} className="edit">Edit</button>
          </div>
          {index < bookingRequests.length - 1 && <hr className="divider" />}
        </div>
      ))}
      {isDetailModalOpen && selectedRequest && (
        <AppointmentDetailModal
          request={selectedRequest}
          onClose={handleCloseDetailModal}
          onEdit={() => handleEdit(selectedRequest)}
        />
      )}
      {isEditModalOpen && selectedRequest && (
        <EditAppointmentModal
          request={selectedRequest}
          onClose={handleCloseEditModal}
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








