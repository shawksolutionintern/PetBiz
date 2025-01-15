import React, { useState } from 'react';
import { Modal, Form, Input, Button, Row, Col, Typography, Switch } from 'antd';
import { RightOutlined, PlusOutlined} from '@ant-design/icons';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './PetDetailModal.css';
import VisitHistoryModal from './VisitHistoryModal';
import VaccinationRecordModal from './VaccinationRecordModal';


const PetDetailModal = ({ pet, onClose, onSave, onDelete }) => {
  const [form] = Form.useForm();
  const [visibleComponent, setVisibleComponent] = useState('');

  const visitHistory = pet.visitHistory || [
    { date: '03/01/2023', purpose: 'Grooming', appointmentTime: '1 PM', duration: '30 min', employee: 'Miranda', price: '$60' },
    { date: '04/01/2023', purpose: 'Training', appointmentTime: '2 PM', duration: '45 min', employee: 'John', price: '$40' },
    { date: '05/01/2023', purpose: 'Boarding', appointmentTime: '4 PM', duration: '10 Hours', employee: 'Miranda', price: '$160' }
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
            <span style={{color:'#525050'}}>Pet Details</span>
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
          <Col span={8}>
            <img src={pet.avatarUrl} alt="Pet Avatar" className="client-avatars" />
            <div className="client-stats">
              <div className="custom-link-cd" onClick={() => handleItemClick('Visit History')}>
                Visit History 
                <RightOutlined />
              </div>
              <div className="custom-link-cd" onClick={() => handleItemClick('Vaccination Record')}>
                Vaccination Record 
                <RightOutlined />
              </div>
            </div>
          </Col>
           {/* Right Section */}
           <Col span={16} className="client-right-section">
            <Form form={form} layout="vertical" initialValues={pet}>
              {/* 第一行：Owner Name 和 Pet Name */}
              <div className="form-row">
                <div className="form-item">
                  <Form.Item
                    name="owner"
                    label="Owner Name"
                    rules={[{ required: true, message: 'Please enter owner name' }]}
                  >
                    <Input className="client-input" />
                  </Form.Item>
                </div>
                <div className="form-item">
                  <Form.Item
                    name="name"
                    label="Pet Name"
                    rules={[{ required: true, message: 'Please enter pet name' }]}
                  >
                    <Input className="client-input"/>
                  </Form.Item>
                </div>
              </div>

              {/* 第二行：Pet Weight 和 Pet Gender */}
              <div className="form-row">
                <div className="form-item">
                  <Form.Item name="weight" label="Pet Weight">
                    <Input className="client-input" />
                  </Form.Item>
                </div>
                <div className="form-item">
                  <Form.Item name="gender" label="Pet Gender">
                    <Input className="client-input" />
                  </Form.Item>
                </div>
              </div>

              {/* 第三行：Pet's Date of Birth 和 Pet Breed */}
              <div className="form-row">
                <div className="form-item">
                  <Form.Item name="dob" label="Pet's Date of Birth">
                    <Input className="client-input" type="date" />
                  </Form.Item>
                </div>
                <div className="form-item">
                  <Form.Item name="breed" label="Pet Breed">
                    <Input className="client-input" />
                  </Form.Item>
                </div>
              </div>

              {/* Notes */}
              <Form.Item name="notes" label="Notes" className="full-width-item">
                <Input.TextArea className="client-textarea" rows={2} />
              </Form.Item>

              {/* No Longer Offered */}
              <Form.Item className="no-longer-offered">
                <div className="no-longer-row">
                  <label>No Longer Offered</label>
                  <Switch />
                </div>
              </Form.Item>

              {/* Save and Delete Buttons */}
              <div className="form-buttons-cd ">
                <Button type="primary" onClick={handleSave} className="save-button-cid">Save</Button>
                <Button type="danger" onClick={handleDelete} className="delete-button-cid">Delete</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal>

      {/* Visit History Modal */}
      <VisitHistoryModal
        visible={visibleComponent === 'Visit History'}
        onClose={() => setVisibleComponent('')}
        data={visitHistory}
      />

      {/* Vaccination Record Modal */}
      <VaccinationRecordModal
        visible={visibleComponent === 'Vaccination Record'}
        onClose={() => setVisibleComponent('')}
        data={vaccinationRecord}
      />
    </>
  );
};


export default PetDetailModal;


