import React, { useState } from 'react';
import { Modal, Typography, Input } from 'antd';
import { IoIosCloseCircleOutline } from "react-icons/io";


import './UpcomingAppointmentsModal.css';

const UpcomingAppointmentsModal = ({ visible, onClose, data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Modal
    title={
      <div style={{
        display: "flex",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "500",
        fontFamily: "Rubik",
      }}>
        <IoIosCloseCircleOutline
          size={24}
          style={{ color: "#969696", marginRight: 8, cursor: "pointer" }}
          onClick={onClose}
        />
        <span style={{ color: '#525050' }}>Visit History</span>
      </div>
    }
    visible={visible}
      closable={false}
      footer={null}
      centered
      className="upcoming-appointments-modal"
      destroyOnClose={true}
      maskTransitionName=""
      transitionName=""
    >
      {/* Appointments 列表 */}
      <div className="visit-history-list">
        {data.map((item, index) => (
          <div key={index} className="visit-history-item">
            <div className="visit-details">
              <span className="visit-purpose-c">{item.purpose}</span>
              <span className="visit-date-c">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default UpcomingAppointmentsModal;



