import React, { useState } from 'react';
import { Typography, Button } from 'antd';
import ProcurementListPopup from './ProcurementListPopup';  
import './ProductPopup.css';

const { Text } = Typography;

const ProductPopup = ({ visible, product, onClose }) => {
  const [isProcurementVisible, setIsProcurementVisible] = useState(false);  

  if (!visible) return null; 

  const handleOrderClick = () => {
    setIsProcurementVisible(true);
  };

  const handleProcurementClose = () => {
    setIsProcurementVisible(false);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="top-section">
          <div className="left-column">
            <h3 className="product-info-title">Product Info</h3>
            <p>Product category: {product.category}</p>
            <p>Material: {product.material}</p>
            <p>Producing area: {product.producingArea}</p>
            <p>Brand: {product.brand}</p>
            <div className="product-styles">
              {product.styles.map((style, index) => (
                <div key={index} className="style-item">
                  <Text>{style.name}</Text>
                  <Text>{style.price}</Text>
                  <Button>-</Button>
                  <Text>0</Text>
                  <Button>+</Button>
                </div>
              ))}
            </div>
          </div>
          <div className="right-column">
            <div className="merchant-info">
              <h3 className="merchant-info-title">Merchant Info</h3>
              <p>Name: {product.merchant.name}</p>
              <p>Phone: {product.merchant.phone}</p>
              <p>Email: {product.merchant.email}</p>
              <p>ID: {product.merchant.id}</p>
            </div>
            <div className="product-images">
              <div className="product-images-title">
                <h3>Product Images</h3>
                <Text>more</Text>
              </div>
              <div className="image-grid">
                <div className="product-image">Pet Image</div>
                <div className="product-image">Pet Image</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <p>Total amount: $2000</p>
          <div className="popup-footer">
            <Button type="primary" onClick={handleOrderClick}>
              Order
            </Button>
            <Button>Add to list</Button>
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>

        <ProcurementListPopup
          visible={isProcurementVisible}
          onClose={handleProcurementClose}
          items={[product]}  
          totalAmount={2000}  
        />
      </div>
    </div>
  );
};

export default ProductPopup;






