import React from 'react';
import { Modal, Input, List, Button } from 'antd';
import { CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import './ProductListModal.css';

const ProductListModal = ({ visible, products, selectedProducts, onClose, onSelectProduct }) => {
  return (
    <Modal
      title="Product List"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="product-list-modal"
    >
      <Input.Search placeholder="Search" style={{ marginBottom: 20 }} />
      <List
        dataSource={products}
        renderItem={(product) => (
          <List.Item
            actions={[
              <Button
                type="link"
                onClick={() => onSelectProduct(product)}
                icon={selectedProducts.includes(product.id) ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CheckCircleOutlined />}
              />,
            ]}
          >
            <List.Item.Meta
              title={product.name}
              description={`${product.type} - ${product.retailPrice}`}
            />
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default ProductListModal;
