import React from 'react';
import { Modal } from 'antd';
import './SignedContractModal.css'

const SignedContractModal = ({ visible, onClose }) => {
  const pdfPlaceholder = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  return (
    <Modal
      title="Signed Contract"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={900}
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
