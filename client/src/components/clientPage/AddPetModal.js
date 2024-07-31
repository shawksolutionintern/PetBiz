import React, { useState } from 'react';
import { Modal, Form, Input, Button, Row, Col, Typography, Switch, Upload, message } from 'antd';
import { PlusOutlined, RightOutlined } from '@ant-design/icons';
import VaccinationRecordUploadModal from './VaccinationRecordUploadModal';
import './PetDetailModal.css';

const AddPetModal = ({ onClose, onSave }) => {
  const [form] = Form.useForm();
  const [avatarUrl, setAvatarUrl] = useState('');
  const [visibleComponent, setVisibleComponent] = useState('');

  const handleSave = () => {
    form.validateFields().then(values => {
      onSave({ ...values, avatarUrl });
      onClose();
    });
  };

  const handleUploadChange = info => {
    if (info.file.status === 'done') {
      // Get this url from response in real implementation
      setAvatarUrl(URL.createObjectURL(info.file.originFileObj));
    }
  };

  const beforeUpload = file => {
    // Validate file type and size before upload
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleItemClick = (item) => {
    setVisibleComponent(item);
  };

  return (
    <>
      <Modal
        title="Add New Pet"
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
        width="900px"
      >
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="/path/to/upload"
                beforeUpload={beforeUpload}
                onChange={handleUploadChange}
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  <div>
                    <PlusOutlined />
                    <div className="upload-text" style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
            <Typography.Text className="custom-link" onClick={() => handleItemClick('Upload Vaccination Record')}>
              Upload Vaccination Record <RightOutlined />
            </Typography.Text>
          </Col>
          <Col span={16}>
            <Form form={form} layout="vertical">
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

      <VaccinationRecordUploadModal
        visible={visibleComponent === 'Upload Vaccination Record'}
        onClose={() => setVisibleComponent('')}
      />
    </>
  );
};

export default AddPetModal;


