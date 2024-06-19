import React, { useState } from "react";
import "./ServiceDetail.css";

const AddServiceModal = ({ onClose, onSave }) => {
  const [serviceName, setServiceName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [tags, setTags] = useState(["Dog", "Long Hair"]);
  const [noLongerOffered, setNoLongerOffered] = useState(false);

  const handleSave = () => {
    const newService = {
      id: Math.random().toString(36).substr(2, 9),
      name: serviceName,
      type: serviceType,
      price: price,
      duration: duration,
      tags: tags,
      noLongerOffered: noLongerOffered,
    };
    onSave(newService);
    onClose();
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagAdd = (newTag) => {
    setTags([...tags, newTag]);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Add a new service</h2>
        <form className="service-form">
          <div className="form-group">
            <label>Service Name</label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Service Type</label>
            <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
              <option value="Grooming">Grooming</option>
              <option value="Training">Training</option>
              <option value="Boarding">Boarding</option>
              <option value="Veterinary">Veterinary</option>
            </select>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Service Tags</label>
            <div className="tags">
              {tags.map(tag => (
                <span key={tag} className="tag" onClick={() => handleTagRemove(tag)}>
                  {tag} ×
                </span>
              ))}
              <span className="add-tag" onClick={() => handleTagAdd("New Tag")}>+</span>
            </div>
          </div>
          <div className="form-group">
            <label>No Longer Offered</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={noLongerOffered}
                onChange={(e) => setNoLongerOffered(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="form-actions">
            <button type="button" className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceModal;



