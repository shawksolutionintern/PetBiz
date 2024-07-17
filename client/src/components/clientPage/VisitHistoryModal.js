import React from 'react';
import { Modal, Typography, Input, Collapse } from 'antd';
import './VisitHistoryModal.css';

const { Panel } = Collapse;
const { Search } = Input;

const VisitHistoryModal = ({ visible, onClose, data }) => (
  <Modal
    title="Visit History"
    visible={visible}
    onCancel={onClose}
    footer={null}
    width={900} // 与 ClientDetailModal 一样大
    bodyStyle={{ padding: 0 }} // 去掉内边距
  >
    <div className="visit-history-header">
      <Search placeholder="Search" style={{ marginBottom: 16, padding: '10px 20px' }} />
    </div>
    <div className="visit-history-content">
      <Collapse accordion>
        {data.map((item, index) => (
          <Panel 
            header={`${item.purpose} - ${item.date}`} 
            key={index}
            className="visit-history-panel"
          >
            <Typography.Paragraph><strong>Pet Name:</strong> {item.petName}</Typography.Paragraph>
            <Typography.Paragraph><strong>Appointment Time:</strong> {item.appointmentTime}</Typography.Paragraph>
            <Typography.Paragraph><strong>Duration:</strong> {item.duration}</Typography.Paragraph>
            <Typography.Paragraph><strong>Employee:</strong> {item.employee}</Typography.Paragraph>
            <Typography.Paragraph><strong>Price:</strong> {item.price}</Typography.Paragraph>
          </Panel>
        ))}
      </Collapse>
    </div>
  </Modal>
);

export default VisitHistoryModal;



