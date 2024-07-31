import React, { useState } from 'react';
import { Modal, List, Input } from 'antd';
import './UpcomingAppointmentsModal.css';
import AppointmentDetailModal from '../homePage/AppointmentDetailModal'; // Corrected case in import path

const { Search } = Input;

const UpcomingAppointmentsModal = ({ visible, onClose, data }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseDetail = () => {
    setSelectedAppointment(null);
  };

  return (
    <Modal
      title="Upcoming Appointments"
      visible={visible}
      onCancel={() => {
        onClose();
        setSelectedAppointment(null);
      }}
      footer={null}
      width={900} 
      bodyStyle={{ padding: 0 }}
    >
      <div className="upcoming-appointments-header">
        <Search placeholder="Search" style={{ marginBottom: 16, padding: '10px 20px' }} />
      </div>
      <div className="upcoming-appointments-content">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item onClick={() => handleAppointmentClick(item)} className="upcoming-appointments-item">
              <List.Item.Meta
                title={item.purpose}
                description={item.date}
              />
            </List.Item>
          )}
        />
        {selectedAppointment && (
          <AppointmentDetailModal
            request={selectedAppointment}
            onClose={handleCloseDetail}
          />
        )}
      </div>
    </Modal>
  );
};

export default UpcomingAppointmentsModal;



