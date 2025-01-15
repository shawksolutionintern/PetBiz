import React from 'react';
import { Modal } from 'antd';
import { IoIosCloseCircleOutline } from "react-icons/io";

const PdfViewModal = ({ visible, onClose, pdfUrl, title }) => {
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
        <span style={{ color: '#525050' }}>{title}</span>
      </div>
    }
      visible={visible}
      closable={false}
      footer={null}
      centered
      className="add-pet-modal"
      maskTransitionName=""
      transitionName=""
    >
      <iframe
        title="PDF Viewer" 
        src={pdfUrl}
        frameBorder="0"
        width="100%"
        height="550px"
        allow="fullscreen;"
      ></iframe>
    </Modal>
  );
};

export default PdfViewModal;
