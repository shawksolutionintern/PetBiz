import React, { useState } from "react";
import "./Services.css";
import ServiceDetailModal from "./ServiceDetailModal"; 

const Services = () => {
  const [selectedTab, setSelectedTab] = useState("Services");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([
    { id: 1, name: "Service 1", type: "Grooming", price: "$30", duration: "30 minutes" },
    { id: 2, name: "Service 2", type: "Training", price: "$30", duration: "30 minutes" },
    { id: 3, name: "Service 3", type: "Boarding", price: "$30", duration: "30 minutes" },
    { id: 4, name: "Service 4", type: "Veterinary", price: "$30", duration: "30 minutes" },
  ]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleSaveService = (updatedService) => {
    setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
  };

  return (
    <div className="services-page">
      <div className="services-navbar">
        <div className="tabs">
          <div
            className={`tab ${selectedTab === "Services" ? "active" : ""}`}
            onClick={() => handleTabChange("Services")}
          >
            Services
          </div>
          <div
            className={`tab ${selectedTab === "Products" ? "active" : ""}`}
            onClick={() => handleTabChange("Products")}
          >
            Products
          </div>
          <div
            className={`tab ${selectedTab === "Packages" ? "active" : ""}`}
            onClick={() => handleTabChange("Packages")}
          >
            Packages
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-icons">
          <span className="icon">☰</span>
          <span className="icon">＋</span>
        </div>
      </div>
      <div className="services-list">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-item"
            onClick={() => handleServiceClick(service)}
          >
            <div className="service-info">
              <div className="service-name">{service.name}</div>
              <div className="service-type">{service.type}</div>
            </div>
            <div className="service-details">
              <div className="service-price">{service.price}</div>
              <div className="service-duration">{service.duration}</div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={handleCloseModal}
          onSave={handleSaveService}
        />
      )}
    </div>
  );
};

export default Services;
