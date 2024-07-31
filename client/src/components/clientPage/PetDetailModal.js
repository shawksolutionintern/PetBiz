import React, { useState } from 'react';
import { Modal, Form, Input, Button, Row, Col, Typography, Switch, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './PetDetailModal.css';
import PetVisitHistoryModal from './PetVisitHistoryModal';
import VaccinationRecordModal from './VaccinationRecordModal';


const PetDetailModal = ({ pet, onClose, onSave, onDelete }) => {
  const [form] = Form.useForm();
  const [visibleComponent, setVisibleComponent] = useState('');

  const visitHistory = pet.visitHistory || [
    { date: '03/01/2023', purpose: 'Grooming', appointmentTime: '1 PM', duration: '30 min', employee: 'Miranda', price: '$60' },
    { date: '04/01/2023', purpose: 'Training', appointmentTime: '2 PM', duration: '45 min', employee: 'John', price: '$40' }
  ];

  const vaccinationRecord = pet.vaccinationRecord || [
    { date: '2022-01-10', vaccine: 'Rabies', vet: 'Dr. Smith' },
    { date: '2022-03-22', vaccine: 'Distemper', vet: 'Dr. Jones' }
  ];

  const handleSave = () => {
    form.validateFields().then(values => {
      onSave({ ...pet, ...values });
      onClose();
    });
  };

  const handleDelete = () => {
    onDelete(pet.id);
  };

  const handleItemClick = (item) => {
    setVisibleComponent(item);
  };

  return (
    <>
      <Modal
        title="Pet Details"
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
            <img src={pet.avatarUrl} alt="Pet Avatar" className="pet-avatar" />
            <div className="pet-stats">
              <Typography.Text className="custom-link" onClick={() => handleItemClick('Visit History')}>
                Visit History <RightOutlined />
              </Typography.Text><br />
              <Typography.Text className="custom-link" onClick={() => handleItemClick('Vaccination Record')}>
                Vaccination Record <RightOutlined />
              </Typography.Text>
            </div>
          </Col>
          <Col span={16}>
            <Form form={form} layout="vertical" initialValues={pet}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="owner" label="Owner Name" rules={[{ required: true, message: 'Please enter owner name' }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="name" label="Pet Name" rules={[{ required: true, message: 'Please enter pet name' }]}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="weight" label="Pet Weight">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="gender" label="Pet Gender">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="dob" label="Pet's Date of Birth">
                    <Input type="date" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="breed" label="Pet Breed">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="notes" label="Notes">
                <Input.TextArea />
              </Form.Item>
              <Form.Item name="active" label="No Longer Offered" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>

      <PetVisitHistoryModal
        visible={visibleComponent === 'Visit History'}
        onClose={() => setVisibleComponent('')}
        data={visitHistory}
      />
      <VaccinationRecordModal
        visible={visibleComponent === 'Vaccination Record'}
        onClose={() => setVisibleComponent('')}
        data={vaccinationRecord}
      />
    </>
  );
};

export default PetDetailModal;


