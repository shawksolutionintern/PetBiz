import React, { useState } from "react";
import { Modal, Form, Input, Button, Select, Switch } from "antd";
import ServiceListModal from "./ServiceListModal";
import ProductListModal from "./ProductListModal";
import "./PackageDetailModal.css";

const { Option } = Select;

const AddPackageModal = ({ visible, onClose, onSave }) => {
  const [form] = Form.useForm();
  const [tags, setTags] = useState([]);
  const [items, setItems] = useState([]);
  const [isServiceListModalOpen, setIsServiceListModalOpen] = useState(false);
  const [isProductListModalOpen, setIsProductListModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

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
      onSave({ ...values, tags, items });
      onClose();
    });
  };

  const handleSelectService = (service) => {
    if (!selectedServices.includes(service.id)) {
      setSelectedServices([...selectedServices, service.id]);
      setItems([...items, { ...service, qty: 1 }]);
    }
    setIsServiceListModalOpen(false);
  };

  const handleSelectProduct = (product) => {
    if (!selectedProducts.includes(product.id)) {
      setSelectedProducts([...selectedProducts, product.id]);
      setItems([...items, { ...product, qty: 1 }]);
    }
    setIsProductListModalOpen(false);
  };

  return (
    <Modal
      title="Add a new Package"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="package-detail-modal"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          name: "",
          category: "",
          price: "",
          tags: [],
          noLongerOffered: false,
        }}
      >
        <Form.Item name="name" label="Package Name" rules={[{ required: true, message: 'Please input the package name!' }]}>
          <Input placeholder="Package Name" />
        </Form.Item>
        <Form.Item name="category" label="Package Category" rules={[{ required: true, message: 'Please select a category!' }]}>
          <Select placeholder="Select a category">
            <Option value="Category A">Category A</Option>
            <Option value="Category B">Category B</Option>
          </Select>
        </Form.Item>
        <Form.Item label={`Package Items (${items.length} items)`}>
          <div className="items-list">
            {items.map((item, index) => (
              <div key={index} className="item">
                <span>{item.name}</span>
                <span className="item-qty">Qty {item.qty}</span>
              </div>
            ))}
            <Button type="dashed" className="add-item-btn" onClick={() => setIsServiceListModalOpen(true)}>
              + Add Service
            </Button>
            <Button type="dashed" className="add-item-btn" onClick={() => setIsProductListModalOpen(true)}>
              + Add Product
            </Button>
          </div>
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please input the price!' }]}>
          <Input placeholder="Price" />
        </Form.Item>
        <Form.Item label="Service Tags">
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag" onClick={() => handleTagRemove(tag)}>
                {tag}
              </span>
            ))}
            <Form.Item name="newTag" noStyle>
              <Input placeholder="Add tag" className="tag-input" />
            </Form.Item>
            <Button type="dashed" onClick={handleTagAdd}>
              +
            </Button>
          </div>
        </Form.Item>
        <Form.Item name="noLongerOffered" label="No Longer Offered" valuePropName="checked">
          <Switch />
        </Form.Item>
        <div className="modal-footer">
          <Button key="cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button key="submit" type="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
      <ServiceListModal
        visible={isServiceListModalOpen}
        services={[
          { id: 1, name: "Grooming", duration: "30 minutes", price: "$30" },
          { id: 2, name: "Training", duration: "45 minutes", price: "$40" },
          { id: 3, name: "Boarding", duration: "24 hours", price: "$100" },
        ]}
        selectedServices={selectedServices}
        onClose={() => setIsServiceListModalOpen(false)}
        onSelectService={handleSelectService}
      />
      <ProductListModal
        visible={isProductListModalOpen}
        products={[
          { id: 1, name: "Product 1", type: "Grooming", retailPrice: "$30" },
          { id: 2, name: "Product 2", type: "Training", retailPrice: "$40" },
          { id: 3, name: "Product 3", type: "Boarding", retailPrice: "$50" },
        ]}
        selectedProducts={selectedProducts}
        onClose={() => setIsProductListModalOpen(false)}
        onSelectProduct={handleSelectProduct}
      />
    </Modal>
  );
};

export default AddPackageModal;



