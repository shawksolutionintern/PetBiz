import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import EmployeeExceptionModal from "./EmployeeExceptionModal";
import "./ServiceDetail.css";

const AddServiceModal = ({ onClose, onSave }) => {
  const [serviceName, setServiceName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [tags, setTags] = useState([]); 
  const [customization] = useState("Employee Exceptions");
  const [isEmployeeExceptionModalOpen, setIsEmployeeExceptionModalOpen] =
    useState(false);

  const handleSave = () => {
    const newService = {
      name: serviceName,
      type: serviceType,
      price,
      duration,
      customization,
      tags
    };
    onSave(newService);
    onClose();
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagAdd = () => {
    const newTag = prompt("Enter new tag:");
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content-sd">
        <div className="modal-header-sd">
          <IoIosCloseCircleOutline className="close-icon" onClick={onClose} />
          <h2 className="sd-title">Add a New Service</h2>
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
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="" disabled>
                Select Service Type
              </option>
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
          </div>
          <div className="form-group-sd">
            <label>Service Customization</label>
            <button
              type="button"
              className="customization-box"
              onClick={() => setIsEmployeeExceptionModalOpen(true)}
            >
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
              <span className="add-tag" onClick={handleTagAdd}>+</span>
            </div>
          </div>
          <div className="form-actions-as">
            <button type="button" className="save-button-as" onClick={handleSave}>
              Save
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

export default AddServiceModal;





