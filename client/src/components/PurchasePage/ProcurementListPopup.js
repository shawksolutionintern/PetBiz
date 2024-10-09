import React, { useState } from 'react';
import { Typography, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './ProcurementListPopup.css';
import OrderManagementPopup from './OrderManagementPopup'; 

const { Text } = Typography;

const ProcurementListPopup = ({ visible, onClose, items, totalAmount }) => {
  const [isOrderManagementVisible, setIsOrderManagementVisible] = useState(false);

  if (!visible) return null;

  const handleOrderClick = () => {
    setIsOrderManagementVisible(true); 
  };

  const handleOrderManagementClose = () => {
    setIsOrderManagementVisible(false); 
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h3>Procurement List</h3>
          <Button onClick={onClose} className="close-button">X</Button>
        </div>

        <table className="procurement-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td colSpan="4" className="product-header">{item.name}</td>
                </tr>
                {item.styles.map((style, idx) => (
                  <tr key={idx}>
                    <td>{style.name}</td>
                    <td className="quantity-control">
                      <Button>-</Button>
                      <Text>{style.quantity || 1}</Text>
                      <Button>+</Button>
                    </td>
                    <td>{style.price}</td>
                    <td>{style.price}</td>
                    <td>
                      <Button icon={<DeleteOutlined />} />
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <div className="total-section">
          <Text>Total amount: ${totalAmount}</Text>
        </div>

        <div className="order-footer">
          <Button type="primary" onClick={handleOrderClick}>Order</Button>
        </div>

        <OrderManagementPopup
          visible={isOrderManagementVisible}
          onClose={handleOrderManagementClose}
        />
      </div>
    </div>
  );
};

export default ProcurementListPopup;
