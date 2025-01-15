import React from 'react';
import { Modal, Form, Input, Button, Row, Col, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "./AddClientModal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddClientModal = ({ onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then(values => {
      onSave(values);
      onClose();
    });
  };

  return (
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
          <span style={{ color: '#525050' }}>Add a new client</span>
        </div>
      }
      visible={true}
      closable={false}
      footer={null}
      centered
      className="add-client-modal"
      destroyOnClose={true}
      maskTransitionName=""
      transitionName=""
    >
      <Row gutter={16}>
        {/* Left Section: Avatar */}
        <Col span={8} className="client-left">
          <div className="empty-avatar">
            <span>Upload an Image</span>
          </div>
        </Col>

        {/* Right Section: Form */}
        <Col span={16} className="client-right-section">
          <Form form={form} layout="vertical" initialValues={{}} className="client-right-form">
            {/* Client Name and Loyalty ID */}
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

            {/* E-mail and Mobile Phone */}
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

            {/* Address */}
            <Form.Item name="address" label="Address" className="full-width-item">
              <Input className="client-input" />
            </Form.Item>

            {/* Notes */}
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
              <div className="add-pet-section-ac">
                <PlusOutlined className="add-pet-icon" />
              </div>
            </div>

            {/* Save Button */}
            <div className="form-buttons-cd">
              <Button type="primary" onClick={handleSave} className="save-button-cid">Save</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};

export default AddClientModal;

