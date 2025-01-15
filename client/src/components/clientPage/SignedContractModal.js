import React from 'react';
import { Modal } from 'antd';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './SignedContractModal.css'

const SignedContractModal = ({ visible, onClose }) => {
  const pdfPlaceholder = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
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
        <span style={{ color: '#525050' }}>Contract</span>
      </div>
    }
      visible={visible}
      closable={false}
      footer={null}
      centered
      className="signed-contract-modal"
      destroyOnClose={true}
      maskTransitionName=""
      transitionName=""
    >
      <iframe
        src={pdfPlaceholder}
        frameBorder="0"
        width="100%"
        height="550px" 
        allow="fullscreen;"
      ></iframe>
    </Modal>
  );
};

export default SignedContractModal;
