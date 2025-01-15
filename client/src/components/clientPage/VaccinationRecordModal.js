import React from 'react';
import { Modal} from 'antd';
import { IoIosCloseCircleOutline } from "react-icons/io";

const VaccinationRecordModal = ({ visible, onClose, data }) => {
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
        <span style={{ color: '#525050' }}>Vaccination Record</span>
      </div>
    }
    visible={visible}
    closable={false}
    footer={null}
    destroyOnClose={true}
    centered
    className="add-pet-modal"
    maskTransitionName=""
    transitionName=""
    >
      <iframe
        src={pdfPlaceholder}
        frameBorder="0"
        width="100%"
        height="590px" 
        allow="fullscreen;"
      ></iframe>
    </Modal>
  );
};

export default VaccinationRecordModal;
