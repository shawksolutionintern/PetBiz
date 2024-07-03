import React, { useState } from "react";
import { Modal, Form, Input, Button, Select, Switch } from "antd";
import ServiceListModal from "./ServiceListModal";
import "./PackageDetailModal.css";

const { Option } = Select;

const PackageDetailModal = ({ pkg, onClose, onSave, onDelete }) => {
  const [form] = Form.useForm();
  const [tags, setTags] = useState(pkg.tags || []);
  const [items, setItems] = useState(Array.isArray(pkg.items) ? pkg.items : []);
  const [isServiceListModalOpen, setIsServiceListModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState(items.map(item => item.id));

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
      onSave({ ...pkg, ...values, tags, items });
      onClose();
    });
  };

  const handleDelete = () => {
    onDelete(pkg.id);
  };

  const handleSelectService = (service) => {
    if (!selectedServices.includes(service.id)) {
      setSelectedServices([...selectedServices, service.id]);
      setItems([...items, service]);
    }
    setIsServiceListModalOpen(false);
  };

  return (
    <Modal
      title="Package Details"
      visible={true}
      onCancel={onClose}
      footer={null}
      className="package-detail-modal"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          name: pkg.name,
          category: pkg.category,
          price: pkg.price,
          tags: pkg.tags,
          noLongerOffered: pkg.noLongerOffered,
        }}
      >
        <Form.Item name="name" label="Package Name">
          <Input placeholder="Package Name" />
        </Form.Item>
        <Form.Item name="category" label="Package Category">
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
            <Button type="dashed" className="add-item-btn">
              + Add Product
            </Button>
          </div>
        </Form.Item>
        <Form.Item name="price" label="Price">
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
          <Button key="delete" type="danger" onClick={handleDelete}>
            Delete
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
    </Modal>
  );
};

export default PackageDetailModal;




