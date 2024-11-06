import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { RiTodoLine } from "react-icons/ri";
import { BsChatRightDots } from "react-icons/bs";
import { Divider, Row, Col, Button } from "antd";
import "./css/AppointmentDetailModal.css"; 

const AppointmentDetailModal = ({ request, onClose }) => {
  return (
    <div className="modal-overlayd">
      <div className="modal-contentd">
        <button className="close-buttond" onClick={onClose}>
          <RxCrossCircled style={{ fontSize: "30px" }} />
        </button>
        <h2 className="modal-title">Appointment Detail</h2>

        <Row className="modal-bodyd">
          {/* Left Section: Service Info */}
          <Col span={11} className="service-info-section">
            <h3 className="section-title">Service Info</h3>
            <div className="service-item">
              <RiTodoLine className="icon" />
              <p className="service-text">Dog Haircut</p>
            </div>
            <div className="service-item">
              <span className="icon">📅</span>
              <p className="service-text">Aug 1, 2023 at 8:00 AM</p>
            </div>
            <div className="service-item">
              <span className="icon">👤</span>
              <p className="service-text">Brandon</p>
            </div>
            <div className="service-item">
              <span className="icon">💲</span>
              <p className="service-text">$80</p>
            </div>
            <div className="client-note">
              <BsChatRightDots className="icon" />
              <p>Client might arrive earlier than scheduled time.</p>
            </div>
            <h4 className="process-title">Service Process</h4>
            <div className="process-icons">
              <span className="process-icon">✓</span>
              <span className="process-icon">→</span>
              <span className="process-icon">... etc.</span>
            </div>
            <Button className="check-in-button" type="primary">Check in</Button>
          </Col>

          {/* Vertical Divider */}
          <Col span={1} className="vertical-divider">
            <Divider type="vertical" style={{ height: "100%" }} />
          </Col>

          {/* Right Section: Client and Pet Info */}
          <Col span={12} className="right-section">
            <div className="client-info-section">
              <h3 className="section-title">Client Info</h3>
              <p><strong>Name:</strong> Elizabeth Cooke</p>
              <p><strong>Phone:</strong> 123-456-789</p>
              <p><strong>Email:</strong> 13678@13678</p>
              <p><strong>ID:</strong> B602138005</p>
            </div>

            {/* Horizontal Divider */}
            <Divider />

            <div className="pet-info-section">
              <h3 className="section-title">Pet Info</h3>
              <p><strong>Name:</strong> Cola</p>
              <p><strong>Breed:</strong> Golden Retriever</p>
              <p><strong>DOB:</strong> 10/01/2022</p>
              <p><strong>Gender:</strong> Female</p>
              <p><strong>Weight:</strong> 56 lbs</p>
              <div className="pet-image">Pet Image</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppointmentDetailModal;


