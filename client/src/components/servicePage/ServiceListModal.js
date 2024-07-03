import React from 'react';
import { Modal, Input, List, Button } from 'antd';
import { CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import './ServiceListModal.css';

const ServiceListModal = ({ visible, services, selectedServices, onClose, onSelectService }) => {
  return (
    <Modal
      title="Service List"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="service-list-modal"
    >
      <Input.Search placeholder="Search" style={{ marginBottom: 20 }} />
      <List
        dataSource={services}
        renderItem={(service) => (
          <List.Item
            actions={[
              <Button
                type="link"
                onClick={() => onSelectService(service)}
                icon={selectedServices.includes(service.id) ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CheckCircleOutlined />}
              />,
            ]}
          >
            <List.Item.Meta
              title={service.name}
              description={`${service.duration} - ${service.price}`}
            />
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default ServiceListModal;
