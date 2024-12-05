import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";
import './ServiceListModal.css';

const ServiceListModal = ({ visible, services, selectedServices, onClose, onSelectService }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [toggledServices, setToggledServices] = useState(selectedServices);
  const [isSelected, setIsSelected] = useState(false);

  if (!visible) return null;

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleService = (serviceId) => {
    if (toggledServices.includes(serviceId)) {
      setToggledServices(toggledServices.filter((id) => id !== serviceId));
    } else {
      setToggledServices([...toggledServices, serviceId]);
    }
  };

  const toggleSelect = () => {
    setIsSelected(prevState => !prevState);
  };

  return (
    <div className="modal-overlay">
      <div className="service-list-modal">
        <div className="modal-header-sd">
          <IoIosCloseCircleOutline className="close-icon" onClick={onClose} />
          <h2>Service List</h2>
        </div>
        <div className="search-bar-container">
          <div className="search-bar-sm">
            <IoSearchOutline className="search-icon-sm" />
            <input  
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <span className="menu-icon">☰</span>
        </div>
        <ul className="items-list-custom">
          {filteredServices.map((service) => (
            <li key={service.id} className="item-box-custom">
              <div className="item-info-custom">
                <h3 className="item-title-custom">{service.name}</h3>
                <p className="item-description-custom">{service.duration} - {service.price}</p>
              </div>
              <button className="select-button-custom" onClick={() => handleToggleService(service.id)}>
                {toggledServices.includes(service.id) ? (
                  <IoIosCheckmarkCircle className="selected-icon-custom" />
                ) : (
                  <CiCircleCheck className="unselected-icon-custom" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceListModal;

