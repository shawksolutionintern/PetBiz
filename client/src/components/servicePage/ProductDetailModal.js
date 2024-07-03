import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, Switch, Row, Col } from "antd";

const { Option } = Select;

const ProductDetailModal = ({ product, onClose, onSave, onDelete }) => {
  const [form] = Form.useForm();
  const [tags, setTags] = useState(product.tags);

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagAdd = () => {
    const newTag = form.getFieldValue("newTag");
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
    form.resetFields(["newTag"]);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave({ ...product, ...values, tags });
      onClose();
    });
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <Modal
      title="Product Details"
      visible={true}
      onCancel={onClose}
      footer={[
        <Button key="delete" type="danger" onClick={handleDelete}>
          Delete
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
      className="product-detail-modal"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          name: product.name,
          type: product.type,
          brand: product.brand,
          id: product.id,
          size: product.size,
          retailPrice: product.retailPrice,
          wholesalePrice: product.wholesalePrice,
          stock: product.stock,
          supplier: product.supplier,
          onlyUsedByBusiness: product.onlyUsedByBusiness,
          noLongerOffered: product.noLongerOffered,
        }}
      >
        <Form.Item name="name" label="Product Name">
          <Input placeholder="Product Name" />
        </Form.Item>
        <Form.Item name="type" label="Product Type">
          <Select placeholder="Select a product type">
            <Option value="Grooming">Grooming</Option>
            <Option value="Training">Training</Option>
            <Option value="Boarding">Boarding</Option>
            <Option value="Veterinary">Veterinary</Option>
          </Select>
        </Form.Item>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="brand" label="Brand">
              <Select placeholder="Brand">
                <Option value="Optional">Optional</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="id" label="Product ID">
              <Input placeholder="Product ID" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="size" label="Size">
              <Input placeholder="Size" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="retailPrice" label="Retail Price">
              <Input placeholder="Retail Price" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="wholesalePrice" label="Wholesale Price">
              <Input placeholder="Wholesale Price" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="stock" label="Stock">
              <Input placeholder="Stock" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="supplier" label="Supplier">
          <Select placeholder="Supplier">
            <Option value="Optional">Optional</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Service Tags">
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag" onClick={() => handleTagRemove(tag)}>
                {tag} ×
              </span>
            ))}
            <Form.Item name="newTag" noStyle>
              <Input placeholder="Add tag" style={{ width: '100px' }} />
            </Form.Item>
            <Button type="dashed" onClick={handleTagAdd}>
              +
            </Button>
          </div>
        </Form.Item>
        <Form.Item name="onlyUsedByBusiness" label="Only Used By Business" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name="noLongerOffered" label="No Longer Offered" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductDetailModal;






