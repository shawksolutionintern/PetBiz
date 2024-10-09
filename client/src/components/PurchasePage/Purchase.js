import React, { useState } from 'react';
import { Input, List, Typography } from 'antd';
import ProductPopup from './ProductPopup'; 
import './Purchase.css';

const { Search } = Input;
const { Text } = Typography;

const data = [
  {
    id: 1,
    name: 'Product Name 1',
    type: 'Product Type 1',
    status: 'Purchased',
    price: '$30',
    stock: '8 in stock',
    category: 'Dog food',
    material: 'High quality',
    producingArea: 'ABCC',
    merchant: {
      name: 'Elizabeth Cooke',
      phone: '123-345-4567',
      email: '13678@13678',
      id: 'B602138005',
    },
    styles: [
      { name: 'Style 1', price: '$20' },
      { name: 'Style 2', price: '$25' },
      { name: 'Style 3', price: '$30' },
    ],
  },
  {
    id: 2,
    name: 'Product Name 2',
    type: 'Product Type 2',
    status: 'In Stock',
    price: '$50',
    stock: '10 in stock',
    category: 'Cat food',
    material: 'Premium quality',
    producingArea: 'XYZZ',
    merchant: {
      name: 'John Doe',
      phone: '987-654-3210',
      email: 'john.doe@example.com',
      id: 'B902138005',
    },
    styles: [
      { name: 'Style A', price: '$40' },
      { name: 'Style B', price: '$45' },
      { name: 'Style C', price: '$50' },
    ],
  },
  {
    id: 3,
    name: 'Product Name 3',
    type: 'Product Type 3',
    status: 'Purchased',
    price: '$30',
    stock: '1 in stock',
    category: 'Dog food',
    material: 'High quality',
    producingArea: 'ABCC',
    merchant: {
      name: 'Elizabeth Cooke',
      phone: '123-345-4567',
      email: '13678@13678',
      id: 'B602138005',
    },
    styles: [
      { name: 'Style 1', price: '$20' },
      { name: 'Style 2', price: '$25' },
      { name: 'Style 3', price: '$30' },
    ],
  },
  {
    id: 4,
    name: 'Product Name 4',
    type: 'Product Type 4',
    status: 'Purchased',
    price: '$30',
    stock: '12 in stock',
    category: 'Dog food',
    material: 'High quality',
    producingArea: 'ABCC',
    merchant: {
      name: 'Elizabeth Cooke',
      phone: '123-345-4567',
      email: '13678@13678',
      id: 'B602138005',
    },
    styles: [
      { name: 'Style 1', price: '$20' },
      { name: 'Style 2', price: '$25' },
      { name: 'Style 3', price: '$30' },
    ],
  }
];

const Purchase = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showModal = (item) => {
    setSelectedProduct(item);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedProduct(null); 
  };

  return (
    <div className="purchase-container">
      <div className="purchase-header">
        <h2>Products</h2>
        <Search placeholder="Search" className="search-bar" />
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={() => showModal(item)} className="product-item">
            <List.Item.Meta
              title={
                <div className="product-title">
                  <Text>{item.name}</Text>
                  <Text type="secondary" className="status-text">
                    {item.status}
                  </Text>
                </div>
              }
              description={<span className="product-description">{item.type}</span>}
            />
            <div className="product-price-stock">
              <Text>{item.price}</Text>
              <Text type="secondary">{item.stock}</Text>
            </div>
          </List.Item>
        )}
      />
      {selectedProduct && (
        <ProductPopup
          visible={isModalVisible}
          product={selectedProduct}
          onClose={handleCancel} 
        />
      )}
    </div>
  );
};

export default Purchase;

