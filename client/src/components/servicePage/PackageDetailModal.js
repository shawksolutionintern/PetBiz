import React, { useState } from "react";
import ServiceListModal from "./ServiceListModal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./PackageDetailModal.css";

const PackageDetailModal = ({ pkg, onClose, onSave, onDelete }) => {
  const [tags, setTags] = useState(pkg.tags || []);
  const [items, setItems] = useState(Array.isArray(pkg.items) ? pkg.items : []);
  const [isServiceListModalOpen, setIsServiceListModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState(items.map(item => item.id));
  const [formValues, setFormValues] = useState({
    name: pkg.name || "",
    category: pkg.category || "",
    price: pkg.price || "",
    noLongerOffered: pkg.noLongerOffered || false,
    newTag: ""
  });

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagAdd = () => {
    const newTag = formValues.newTag;
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
    setFormValues({ ...formValues, newTag: "" });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    onSave({ ...pkg, ...formValues, tags, items });
    onClose();
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
    <div className="modal-overlay">
      <div className="modal-contain-pkg">
        <div className="modal-header-sd">
        <IoIosCloseCircleOutline className="close-icon" onClick={onClose} />
          <h2>Package Details</h2>
        </div>
        <div className="modal-body">
          <div className="form-group-pkg">
            <label>Package Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Package Name"
            />
          </div>
          <div className="form-group-pkg">
            <label>Package Category</label>
            <select
              name="category"
              value={formValues.category}
              onChange={handleInputChange}
            >
              <option value="">Select a category</option>
              <option value="Category A">Category A</option>
              <option value="Category B">Category B</option>
            </select>
          </div>
          <div className="form-group-pkg">
            <label>Package Items</label>
            <div className="items-list">
              <div className="item-box-pkg">
                <div className="item1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#969696', fontSize: '16px',fontFamily: 'Inter', marginLeft: '12px' }}>Haircut</span>
                  <span style={{ color: '#969696', fontSize: '16px',fontFamily: 'Inter' }}>Qty 1 &gt;</span>
                </div>
                <hr style={{ width: '95%', margin: '0 auto', color: '#969696' }} />
                <div className="item1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#969696', fontSize: '16px',fontFamily: 'Inter', marginLeft: '12px' }}>Cat Snacks</span>
                  <span style={{ color: '#969696', fontSize: '16px',fontFamily: 'Inter' }}>Qty 1 &gt;</span>
                </div>
                <hr style={{ width: '95%', margin: '0 auto', color: '#969696' }} />
                <div className="item-pkg">
                  <span onClick={() => setIsServiceListModalOpen(true)}>+ Add Service</span>
                </div>
                <div className="item-pkg">
                  <span>+ Add Product</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group-pkg" style={{ width: '30%' }}>
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
          </div>
          <div className="form-group-pkg">
            <label>Service Tags</label>
            <div className="tags">
              {tags.map((tag) => (
                <span key={tag} className="tag" onClick={() => handleTagRemove(tag)}>
                  {tag} &times;
                </span>
              ))}
              <button className="add-tag-pd" onClick={handleTagAdd}>
                +
              </button>
            </div>
          </div>
          <div className="form-slider-pd">
            <label>No Longer Offered</label>
            <label className="switch-pd">
              <input
                type="checkbox"
                checked={formValues.noLongerOffered}
                onChange={(e) => handleInputChange(e)}
                name="noLongerOffered"
              />
              <span className="slider-round-pd"></span>
            </label>
          </div>
        </div>
        <div className="modal-footer-pkg">
          <button className="delete-button-pkg" onClick={handleDelete}>
            Delete
          </button>
          <button className="save-button-pkg" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <ServiceListModal
        visible={isServiceListModalOpen}
        services={[
          { id: 1, name: "Grooming", duration: "30 minutes", price: "$30" },
          { id: 2, name: "Training", duration: "45 minutes", price: "$40" },
          { id: 3, name: "Boarding", duration: "24 hours", price: "$100" },
          { id: 4, name: "Walking", duration: "30 minutes", price: "$15" },
        ]}
        selectedServices={selectedServices}
        onClose={() => setIsServiceListModalOpen(false)}
        onSelectService={handleSelectService}
      />
    </div>
  );
};

export default PackageDetailModal;





