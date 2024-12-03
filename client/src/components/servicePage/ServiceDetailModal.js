import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import EmployeeExceptionModal from "./EmployeeExceptionModal";
import "./ServiceDetail.css";

const ServiceDetailModal = ({ service, onClose, onSave, onDelete }) => {
  const [serviceName, setServiceName] = useState(service.name);
  const [serviceType, setServiceType] = useState(service.type);
  const [price, setPrice] = useState(service.price);
  const [duration, setDuration] = useState(service.duration);
  const [serviceId] = useState(service.id);
  const [customization] = useState("Employee Exceptions");
  const [tags, setTags] = useState(["Dog", "Long Hair"]);
  const [noLongerOffered, setNoLongerOffered] = useState(false);
  const [isEmployeeExceptionModalOpen, setIsEmployeeExceptionModalOpen] = useState(false);

  const handleSave = () => {
    const updatedService = {
      ...service,
      name: serviceName,
      type: serviceType,
      price,
      duration,
      id: serviceId,
      customization,
      tags,
      noLongerOffered,
    };
    onSave(updatedService);
    onClose();
  };

  const handleDelete = () => {
    onDelete(serviceId);
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagAdd = (newTag) => {
    setTags([...tags, newTag]);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content-sd">
        <div className="modal-header-sd">
          <IoIosCloseCircleOutline className="close-icon" onClick={onClose} />
          <h2 className="sd-title">Service Detail</h2>
        </div>
        <form className="service-form">
          <div className="form-group-sd">
            <label>Service Name</label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>
          <div className="form-group-sd">
            <label>Service Type</label>
            <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
              <option value="Grooming">Grooming</option>
              <option value="Training">Training</option>
              <option value="Boarding">Boarding</option>
              <option value="Veterinary">Veterinary</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group-sd">
              <label>Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group-sd">
              <label>Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="form-group-sd">
              <label>Service ID</label>
              <input type="text" value={serviceId} readOnly />
            </div>
          </div>
          <div className="form-group-sd">
            <label>Service Customization</label>
            <button type="button" onClick={() => setIsEmployeeExceptionModalOpen(true)}>
              {customization}
            </button>
          </div>
          <div className="form-group-sd">
            <label>Service Tags</label>
            <div className="tags">
              {tags.map((tag) => (
                <span key={tag} className="tag" onClick={() => handleTagRemove(tag)}>
                  {tag} ×
                </span>
              ))}
              <span className="add-tag" onClick={() => handleTagAdd("New Tag")}>+</span>
            </div>
          </div>
          <div className="form-slider">
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
            <button type="button" className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </form>
        {isEmployeeExceptionModalOpen && (
          <EmployeeExceptionModal
            employees={["Becky", "Miranda", "Mike", "Matt"]}
            onClose={() => setIsEmployeeExceptionModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceDetailModal;

