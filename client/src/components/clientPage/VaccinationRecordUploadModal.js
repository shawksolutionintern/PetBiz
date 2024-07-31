import React, { useState } from 'react';
import { Modal, Upload, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const VaccinationRecordUploadModal = ({ visible, onClose }) => {
  const [fileList, setFileList] = useState([]);

  const handleUploadChange = info => {
    let newFileList = [...info.fileList];

    newFileList = newFileList.slice(-1);

    newFileList = newFileList.map(file => {
      if (file.response) {     
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
  };

  const beforeUpload = file => {
    const isPdf = file.type === 'application/pdf';
    if (!isPdf) {
      message.error('You can only upload PDF files!');
    }
    return isPdf;
  };

  return (
    <Modal
      title="Vaccination Record"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Close
        </Button>,
      ]}
      width="900px"
    >
      <Upload
        beforeUpload={beforeUpload}
        onChange={handleUploadChange}
        fileList={fileList}
      >
        <div style={{ border: '1px dashed #939191', padding: '220px 350px' ,textAlign: 'center'}}>
          <PlusOutlined />
          <div style={{ marginTop: 8}}><strong>Upload a PDF</strong></div>
        </div>
      </Upload>
    </Modal>
  );
};

export default VaccinationRecordUploadModal;

