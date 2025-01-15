import React, { useState } from 'react';
import { Modal, Typography } from 'antd';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

import './PurchaseHistoryModal.css';

const PurchaseHistoryModal = ({ visible, onClose, data }) => {
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
        <span style={{ color: '#525050' }}>Purchase History</span>
      </div>
    }
      visible={visible}
      closable={false}
      footer={null}
      centered
      className="purchase-history-modal"
      destroyOnClose={true}
      maskTransitionName=""
      transitionName=""
    >
      <div className="search-bar-container">
        <div className="search-bar-sm">
          <IoSearchOutline className="search-icon-sm" />
          <input
            className="search-input-sm"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <span className="menu-icon">☰</span>
      </div>

      {/* Purchase History 列表 */}
      <div className="purchase-history-list">
        {data.map((item, index) => (
          <div
            key={index}
            className={`purchase-history-item ${expandedItem === item.date ? "expanded" : "collapsed"}`}
          >
            <div
              className="purchase-header-ph"
              onClick={() => setExpandedItem(expandedItem === item.date ? null : item.date)}
            >
              <div className="purchase-details">
                <span className="purchase-purpose">{item.item}</span>
                <span className="purchase-date">{item.date}</span>
              </div>
              <FaChevronDown className={`chevron-icon ${expandedItem === item.date ? "expanded" : ""}`} />
            </div>
            {expandedItem === item.date && (
              <div className="visit-dropdown-content">
                <div className="dropdown-item">
                  <span className="label-cv">Item:</span>
                  <span className="value-cv">{item.item}</span>
                </div>
                <div className="dropdown-item">
                  <span className="label-cv">Amount:</span>
                  <span className="value-cv">{item.amount}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default PurchaseHistoryModal;

