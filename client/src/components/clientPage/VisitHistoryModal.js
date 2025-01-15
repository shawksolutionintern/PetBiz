import React, { useState } from 'react';
import { Modal} from 'antd';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa"; 

import './VisitHistoryModal.css';

const VisitHistoryModal = ({ visible, onClose, data }) => {
  const [expandedItem, setExpandedItem] = useState(null);
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
          }}
        >
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
      className="visit-history-modal"
      destroyOnClose={true}
      maskTransitionName=""
      transitionName=""
    >
      <div className="search-bar-container">
        <div className="search-bar-sm">
          <IoSearchOutline className="search-icon-sm" />
          <input  
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <span className="menu-icon">☰</span>
      </div>
      
      {/* Visit History Content */}
      <div className="visit-history-list">
        {data.map((item, index) => (
          <div key={index} className="visit-history-item">
            <div className="visit-header" onClick={() => setExpandedItem(expandedItem === item.date ? null : item.date)}>
              <div className="visit-details">
                <span className="visit-purpose-c">{item.purpose}</span>
                <span className="visit-date-c">{item.date}</span>
              </div>
              <FaChevronDown
                className={`chevron-icon ${expandedItem === item.date ? 'expanded' : ''}`}
              />
            </div>
            {expandedItem === item.date && (
              <div className="visit-dropdown-content">
              <div className="dropdown-item">
                <span className="label-cv">Appointment Time:</span>
                <span className="value-cv">{item.appointmentTime}</span>
              </div>
              <div className="dropdown-item">
                <span className="label-cv">Duration:</span>
                <span className="value-cv">{item.duration}</span>
              </div>
              <div className="dropdown-item">
                <span className="label-cv">Employee:</span>
                <span className="value">{item.employee}</span>
              </div>
              <div className="dropdown-item">
                <span className="label-cv">Price:</span>
                <span className="value-cv">{item.price}</span>
              </div>
            </div>            
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default VisitHistoryModal;

