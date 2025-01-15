import React, { useState } from 'react';
import { Modal, Upload,  message } from 'antd';
import { IoIosCloseCircleOutline } from "react-icons/io";
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
          <span style={{ color: '#525050' }}>Vaccination Record</span>
        </div>
      }
      visible={visible}
      closable={false}
      footer={null}
      centered
      className="add-pet-modal"
      destroyOnClose={true}
      maskTransitionName=""
      transitionName=""
    >
      <Upload
        beforeUpload={beforeUpload}
        onChange={handleUploadChange}
        fileList={fileList}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              border: '1px dashed #000000',
              padding: '250px 350px',
              textAlign: 'center',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '50px',
              marginLeft: '100px',
              marginRight: '30px',
            }}
          >
            <PlusOutlined />
            <strong>Upload a PDF</strong>
          </div>
        </div>
      </Upload>
    </Modal>
  );
};

export default VaccinationRecordUploadModal;
