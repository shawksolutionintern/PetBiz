import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

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
      title="Add Client"
      visible={true}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Client Name" rules={[{ required: true, message: 'Please enter client name' }]}>
          <Input placeholder="Client Name" />
        </Form.Item>
        <Form.Item name="loyaltyId" label="Loyalty ID">
          <Input placeholder="Loyalty ID" />
        </Form.Item>
        <Form.Item name="tel" label="Telephone">
          <Input placeholder="Telephone" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder="Email" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddClientModal;
