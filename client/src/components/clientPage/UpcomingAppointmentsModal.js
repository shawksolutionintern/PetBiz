import React from 'react';
import { Modal, List } from 'antd';


const UpcomingAppointmentsModal = ({ visible, onClose, data, onAppointmentClick }) => (
  <Modal
    title="Upcoming Appointments"
    visible={visible}
    onCancel={onClose}
    footer={null}
    width={900} 
    bodyStyle={{ padding: 0 }}
  >
    <div className="upcoming-appointments-content">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item onClick={() => onAppointmentClick(item)}>
            <List.Item.Meta
              title={item.purpose}
              description={item.date}
            />
          </List.Item>
        )}
      />
    </div>
  </Modal>
);

export default UpcomingAppointmentsModal;

