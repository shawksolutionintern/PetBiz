import React from 'react';
import { Modal, Form, Input, Button, Row, Col, Upload, message, List, Typography } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import "./AddClientModal.css";

const AddClientModal = ({ onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then(values => {
      onSave(values);
      onClose();
    });
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG files!');
      return Upload.LIST_IGNORE;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!');
      return Upload.LIST_IGNORE;
    }
    return false;
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
      width="750px"
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item className="upload-area">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="/path/to/upload"
              beforeUpload={beforeUpload}
            >
              <div>
                <UploadOutlined />
                <div className="upload-text" style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form form={form} layout="vertical">
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
                <Form.Item name="email" label="Email" rules={[{ type: 'email', message: 'Please enter a valid email!' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="tel" label="Telephone">
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
            <List
              header="Pets Information"
              dataSource={[""]}
              renderItem={item => (
                <List.Item actions={[<PlusOutlined onClick={() => alert('Add Pet')} />]}>
                  <Typography.Text>{item}</Typography.Text>
                </List.Item>
              )}
            />
          </Form>
        </Col>
      </Row>
    </Modal >
  );
};

export default AddClientModal;
