import React from 'react';
import { Modal } from 'antd';

const PdfViewModal = ({ visible, onClose, pdfUrl, title }) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={900}
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
