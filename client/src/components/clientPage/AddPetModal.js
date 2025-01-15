import React, { useState } from 'react';
import { Modal, Form, Input, Button, Row, Col, Typography } from 'antd';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PlusOutlined, RightOutlined } from '@ant-design/icons';
import './AddPetModal.css';
import VaccinationRecordUploadModal from './VaccinationRecordUploadModal';

const AddPetModal = ({ onClose, onSave }) => {
  const [form] = Form.useForm();
  const [visibleComponent, setVisibleComponent] = useState('');

  const handleSave = () => {
    form.validateFields().then(values => {
      onSave({ ...values });
      onClose();
    });
  };

  const handleItemClick = (item) => {
    setVisibleComponent(item);
  };

  return (
    <>
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
            <span style={{ color: '#525050' }}>Add a New Pet</span>
          </div>
        }
        visible={true}
        closable={false}
        footer={null}
        centered
        className="add-pet-modal"
        destroyOnClose={true}
        maskTransitionName=""
        transitionName=""
      >
        <Row gutter={16}>
          {/* Left Section: Avatar and Vaccination Upload */}
          <Col span={8} className="client-left">
            <div className="empty-avatar">
              <span>Upload an Image</span>
            </div>
            <Typography.Text className="addpet-link-cd" onClick={() => handleItemClick('Upload Vaccination Record')}>
              Upload Vaccination Record <RightOutlined />
            </Typography.Text>
          </Col>

          {/* Right Section: Form */}
          <Col span={16} className="client-right-section">
            <Form form={form} layout="vertical" initialValues={{}} className="client-right-form">
              <div className="form-row">
                <div className="form-item">
                  <Form.Item name="owner" label="Owner Name" rules={[{ required: true, message: 'Please enter owner name' }]}>
                    <Input className="client-input" />
                  </Form.Item>
                </div>
                <div className="form-item">
                  <Form.Item name="name" label="Pet Name" rules={[{ required: true, message: 'Please enter pet name' }]}>
                    <Input className="client-input" />
                  </Form.Item>
                  </div>
              </div>
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
              <div className="form-row">
                <div className="form-item">
                  <Form.Item name="notes" label="Notes">
                    <Input.TextArea className="client-input" rows={2} />
                  </Form.Item>
                </div>
              </div>
              <div className="form-buttons-cd">
                <Button type="primary" onClick={handleSave} className="save-button-cid">Save</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal>

      <VaccinationRecordUploadModal
        visible={visibleComponent === 'Upload Vaccination Record'}
        onClose={() => setVisibleComponent('')}
      />
    </>
  );
};

export default AddPetModal;



