import React from 'react';
import { Modal, List, Input, Collapse } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import './PetVisitHistoryModal.css';

const { Panel } = Collapse;
const { Search } = Input;

const PetVisitHistoryModal = ({ visible, onClose, data }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={900}
      className="visit-history-modal"
    >
      <div className="modal-header">
        <LeftOutlined onClick={onClose} />
        <h2 className="modal-title">Visit History</h2>
      </div>
      <Search placeholder="Search" className="search-bar" />
      <List
        className="visit-history-list"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Collapse className="visit-history-collapse">
              <Panel
                header={
                  <div className="visit-summary">
                    <span className="visit-purpose">{item.purpose}</span>
                    <span className="visit-date">{item.date}</span>
                  </div>
                }
                key={item.date}
              >
                <div className="visit-details">
                  <p>Appointment Time: {item.appointmentTime}</p>
                  <p>Duration: {item.duration}</p>
                  <p>Employee: {item.employee}</p>
                  <p>Price: {item.price}</p>
                </div>
              </Panel>
            </Collapse>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default PetVisitHistoryModal;

