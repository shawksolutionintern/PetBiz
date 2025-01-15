import React, { useState } from 'react';
import { Modal, Form, Input, Button, Row, Col, Typography, Switch } from 'antd';
import { RightOutlined, PlusOutlined } from '@ant-design/icons';
import './ClientDetailModal.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import VisitHistoryModal from './VisitHistoryModal';
import PurchaseHistoryModal from './PurchaseHistoryModal';
import UpcomingAppointmentsModal from './UpcomingAppointmentsModal';
import SignedContractModal from './SignedContractModal';

const ClientDetailModal = ({ client, onClose, onSave, onDelete }) => {
  const [form] = Form.useForm();
  const [visibleComponent, setVisibleComponent] = useState('');
  

  const visitHistory = client.visitHistory || [
    { date: '03/01/2023', purpose: 'Grooming', petName: 'Judy', appointmentTime: '1 PM', duration: '30 min', employee: 'Miranda', price: '$60' },
    { date: '04/01/2023', purpose: 'Training', petName: 'Max', appointmentTime: '2 PM', duration: '45 min', employee: 'John', price: '$40' }
  ];

  const purchaseHistory = client.purchaseHistory || [
    { date: '2022-01-10', item: 'Product A', amount: 29.99 },
    { date: '2022-03-22', item: 'Product B', amount: 59.50 }
  ];

  const upcomingAppointments = client.upcomingAppointments || [
    { date: '2024-07-20', purpose: 'Yearly Checkup' },
    { date: '2024-10-15', purpose: 'Vaccination' }
  ];

  const signedContract = client.signedContract || false;

  const handleSave = () => {
    form.validateFields().then(values => {
      onSave({ ...client, ...values });
      onClose();
    });
  };

  const handleDelete = () => {
    onDelete(client.id);
  };

  const handleItemClick = (item) => {
    setVisibleComponent(item);
  };

  return (
    <>
      <Modal
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "500",
              fontFamily: "Rubik",
            }}
          >
            <IoIosCloseCircleOutline
              size={24}
              style={{ color: "#969696", marginRight: 8, cursor: "pointer" }}
              onClick={onClose}
            />
            <span style={{color:'#525050'}}>Client Details</span>
          </div>
        }
        visible={true}
        closable={false}
        footer={null}
        centered
        className="client-detail-modal"
        destroyOnClose={true}
        maskTransitionName=""
        transitionName=""
      >
        <Row gutter={16}>
          <Col span={8} className="client-left">
            <img src={client.avatarUrl} alt="Client Avatar" className="client-avatars" />
            <div className="client-stats">
              <p>Loyalty Points: {client.loyaltyPoints || 0}</p>
              <p>Balance: {client.balance || 0}</p>
              <p>Total Visits: {client.totalVisits || 0}</p>
            </div>
            <div className="custom-link-cd" onClick={() => handleItemClick('Visit History')}>
              <span>Visit History</span>
              <RightOutlined />
            </div>
            <div className="custom-link-cd" onClick={() => handleItemClick('Purchase History')}>
              <span>Purchase History</span>
              <RightOutlined />
            </div>
            <div className="custom-link-cd" onClick={() => handleItemClick('Upcoming Appointments')}>
              <span>Upcoming Appointments</span>
              <RightOutlined />
            </div>
            <div className="custom-link-cd" onClick={() => handleItemClick('Signed Contract')}>
              <span>Signed Contract</span>
              <RightOutlined />
            </div>
          </Col>
          <Col span={16} className="client-right-section">
            <Form form={form} layout="vertical" initialValues={client} className="client-right-form">
              {/* 第一行：Client Name 和 Loyalty ID */}
              <div className="form-row">
                <div className="form-item">
                  <Form.Item
                    name="name"
                    label="Client Name"
                    rules={[{ required: true, message: 'Please enter client name' }]}
                  >
                    <Input className="client-input" />
                  </Form.Item>
                </div>
                <div className="form-item">
                  <Form.Item name="loyaltyId" label="Loyalty ID">
                    <Input className="client-input" />
                  </Form.Item>
                </div>
              </div>

              {/* 第二行：E-mail 和 Mobile Phone */}
              <div className="form-row">
                <div className="form-item">
                  <Form.Item name="email" label="E-mail">
                    <Input className="client-input" type="email" />
                  </Form.Item>
                </div>
                <div className="form-item">
                  <Form.Item name="tel" label="Mobile Phone">
                    <Input className="client-input" />
                  </Form.Item>
                </div>
              </div>
              {/* 第三行：Address */}
              <Form.Item name="address" label="Address" className="full-width-item">
                <Input className="client-input" />
              </Form.Item>

              {/* 第四行：Notes */}
              <Form.Item name="notes" label="Notes" className="full-width-item">
                <Input.TextArea className="client-textarea" rows={2} />
              </Form.Item>

              {/* Pets Information */}
              <div style={{ textAlign: 'left', width: '100%' }}>
                <Typography.Title level={5} className="pets-title">
                  Pets Information
                </Typography.Title>
              </div>
              <div className="pets-info-section">
                {/* Pet Tag */}
                <div className="pet-tag">
                  <span>Sam (Affenpinscher)</span>
                  <RightOutlined />
                </div>

                {/* Add Pet Button */}
                <div className="add-pet-section">
                  <PlusOutlined className="add-pet-icon" />
                </div>
              </div>

              {/* No Longer Offered */}
              <Form.Item className="no-longer-offered-cd">
                <div className="no-longer-row">
                  <label>No Longer Offered</label>
                  <Switch />
                </div>
              </Form.Item>

              {/* Save and Delete Buttons */}
              <div className="form-buttons-cd">
                <Button type="primary" onClick={handleSave} className="save-button-cid">Save</Button>
                <Button type="danger" onClick={handleDelete} className="delete-button-cid">Delete</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal>

      <VisitHistoryModal
        visible={visibleComponent === 'Visit History'}
        onClose={() => setVisibleComponent('')}
        data={visitHistory}
      />
      <PurchaseHistoryModal
        visible={visibleComponent === 'Purchase History'}
        onClose={() => setVisibleComponent('')}
        data={purchaseHistory}
      />
      <UpcomingAppointmentsModal
        visible={visibleComponent === 'Upcoming Appointments'}
        onClose={() => setVisibleComponent('')}
        data={upcomingAppointments}
      />
      <SignedContractModal
        visible={visibleComponent === 'Signed Contract'}
        onClose={() => setVisibleComponent('')}
        data={signedContract}
      />
    </>
  );
};

export default ClientDetailModal;








