import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, Switch, Row, Col } from "antd";

const { Option } = Select;

const AddProductModal = ({ onClose, onSave }) => {
  const [form] = Form.useForm();
  const [tags, setTags] = useState([]);

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
      onSave({ ...values, tags });
      onClose();
    });
  };

  return (
    <Modal
      title="Add New Product"
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
      className="add-product-modal"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          name: "",
          type: "",
          brand: "",
          id: "",
          size: "",
          retailPrice: "",
          wholesalePrice: "",
          stock: "",
          supplier: "",
          onlyUsedByBusiness: false,
          noLongerOffered: false,
        }}
      >
        <Form.Item name="name" label="Product Name" rules={[{ required: true, message: 'Please input the product name!' }]}>
          <Input placeholder="Product Name" />
        </Form.Item>
        <Form.Item name="type" label="Product Type" rules={[{ required: true, message: 'Please select the product type!' }]}>
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
            <Form.Item name="id" label="Product ID" rules={[{ required: true, message: 'Please input the product ID!' }]}>
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

export default AddProductModal;



