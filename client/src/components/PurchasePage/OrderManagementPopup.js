import React from 'react';
import { Typography, Button, List, Input } from 'antd';
import './OrderManagementPopup.css';

const { Text } = Typography;

const orders = [
  {
    id: 1,
    productName: 'Dog food',
    date: '2024-05-21',
    status: 'In stock',
  },
  {
    id: 2,
    productName: 'Dog food',
    date: '2024-05-21',
    status: 'In stock',
  },
  {
    id: 3,
    productName: 'Dog food',
    date: '2024-05-21',
    status: 'In stock',
  },
  {
    id: 4,
    productName: 'Dog food',
    date: '2024-05-21',
    status: 'In stock',
  },
  {
    id: 5,
    productName: 'Dog food',
    date: '2024-05-21',
    status: 'In stock',
  },
];

const OrderManagementPopup = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h3>Order Management</h3>
          <Button onClick={onClose} className="close-button">X</Button>
        </div>

        <div className="order-tabs">
          <Button type="text">All orders</Button>
          <Button type="text" className="active-tab">In Progress</Button>
          <Button type="text">Completed</Button>
          <Input placeholder="Search" className="search-bar" style={{ marginLeft: 'auto' }} />
        </div>

        <List
          itemLayout="horizontal"
          dataSource={orders}
          renderItem={order => (
            <List.Item
              className="order-box"
              actions={[
                <Text type="secondary">{order.status}</Text>,
                <Button type="text" className="cancel-order">Cancel order</Button>
              ]}
            >
              <List.Item.Meta
                title={order.productName}
                description={order.date}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default OrderManagementPopup;

