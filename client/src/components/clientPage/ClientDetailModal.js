import React, { useState } from 'react';
import { Modal, Form, Input, Button, Row, Col, Typography, Switch } from 'antd';
import { RightOutlined, PlusOutlined } from '@ant-design/icons';
import './ClientDetailModal.css';
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
        title="Client Details"
        visible={true}
        onCancel={onClose}
        footer={[
          <Button key="delete" danger onClick={handleDelete}>
            Delete
          </Button>,
          <Button key="submit" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
        width="900px"
      >
        <Row gutter={16}>
          <Col span={8}>
            <img src={client.avatarUrl} alt="Client Avatar" className="client-avatars" />
            <div className="client-stats">
              <p>Loyalty Points: {client.loyaltyPoints || 0}</p>
              <p>Balance: {client.balance || 0}</p>
              <p>Total Visits: {client.totalVisits || 0}</p>
            </div>
            <Typography.Text className="custom-link" onClick={() => handleItemClick('Visit History')}>
              Visit History <RightOutlined />
            </Typography.Text><br />
            <Typography.Text className="custom-link" onClick={() => handleItemClick('Purchase History')}>
              Purchase History <RightOutlined />
            </Typography.Text><br />
            <Typography.Text className="custom-link" onClick={() => handleItemClick('Upcoming Appointments')}>
              Upcoming Appointments <RightOutlined />
            </Typography.Text><br />
            <Typography.Text className="custom-link" onClick={() => handleItemClick('Signed Contract')}>
              Signed Contract <RightOutlined />
            </Typography.Text>
          </Col>
          <Col span={16}>
            <Form form={form} layout="vertical" initialValues={client}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="name" label="Client Name" rules={[{ required: true, message: 'Please enter client name' }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="loyaltyId" label="Loyalty ID">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="email" label="E-mail">
                    <Input type="email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="tel" label="Mobile Phone">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="address" label="Address">
                <Input />
              </Form.Item>
              <Form.Item name="notes" label="Notes">
                <Input.TextArea />
              </Form.Item>
              <Typography.Text className="custom-link" onClick={() => alert('Add Pet')}>
                <PlusOutlined /> Add Pet
              </Typography.Text><br />
              <Form.Item name="Active" label="No Longer Offered" valuePropName="checked">
                <Switch />
              </Form.Item>
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








