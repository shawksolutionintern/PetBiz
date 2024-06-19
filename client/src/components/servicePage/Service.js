import React, { useState } from "react";
import "./Services.css";
import ServiceDetailModal from "./ServiceDetailModal";
import ProductDetailModal from "./ProductDetailModal";
import AddProductModal from "./AddProductModal";
import AddServiceModal from "./AddServiceModal";
import FilterModal from "./Filters";

const Services = () => {
  const [selectedTab, setSelectedTab] = useState("Services");
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [services, setServices] = useState([
    { id: 1, name: "Service 1", type: "Grooming", price: "$30", duration: "30 minutes" },
    { id: 2, name: "Service 2", type: "Training", price: "$30", duration: "30 minutes" },
    { id: 3, name: "Service 3", type: "Boarding", price: "$30", duration: "30 minutes" },
    { id: 4, name: "Service 4", type: "Veterinary", price: "$30", duration: "30 minutes" },
  ]);
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", type: "Grooming", brand: "Brand A", retailPrice: "$30", wholesalePrice: "$20", stock: 8, size: "Large", supplier: "Supplier A", tags: ["Dog", "Long Hair"] },
    { id: 2, name: "Product 2", type: "Training", brand: "Brand B", retailPrice: "$40", wholesalePrice: "$25", stock: 5, size: "Medium", supplier: "Supplier B", tags: ["Cat", "Short Hair"] },
    { id: 3, name: "Product 3", type: "Boarding", brand: "Brand C", retailPrice: "$50", wholesalePrice: "$30", stock: 10, size: "Small", supplier: "Supplier C", tags: ["Bird", "Short Hair"] },
    { id: 4, name: "Product 4", type: "Veterinary", brand: "Brand D", retailPrice: "$60", wholesalePrice: "$35", stock: 2, size: "X-Large", supplier: "Supplier D", tags: ["Fish", "No Hair"] },
  ]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSaveService = (updatedService) => {
    setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
  };

  const handleSaveProduct = (updatedProduct) => {
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
  };

  const handleDeleteService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
    handleCloseServiceModal();
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    handleCloseProductModal();
  };

  const handleFilterToggle = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleAddButtonClick = () => {
    if (selectedTab === "Services") {
      setIsAddServiceModalOpen(true);
    } else if (selectedTab === "Products") {
      setIsAddProductModalOpen(true);
    }
  };

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleCloseAddServiceModal = () => {
    setIsAddServiceModalOpen(false);
  };

  const handleCloseAddProductModal = () => {
    setIsAddProductModalOpen(false);
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
          <span className="icon" onClick={handleFilterToggle}>☰</span>
          <span className="icon" onClick={handleAddButtonClick}>＋</span>
        </div>
      </div>
      <div className="services-list">
        {selectedTab === "Services" && services.map((service) => (
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
        {selectedTab === "Products" && products.map((product) => (
          <div
            key={product.id}
            className="service-item"
            onClick={() => handleProductClick(product)}
          >
            <div className="service-info">
              <div className="service-name">{product.name}</div>
              <div className="service-type">{product.type}</div>
            </div>
            <div className="service-details">
              <div className="service-price">{product.retailPrice}</div>
              <div className="service-duration">{product.stock} in stock</div>
            </div>
          </div>
        ))}
      </div>
      {isServiceModalOpen && selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={handleCloseServiceModal}
          onSave={handleSaveService}
          onDelete={handleDeleteService}
        />
      )}
      {isProductModalOpen && selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseProductModal}
          onSave={handleSaveProduct}
          onDelete={handleDeleteProduct}
        />
      )}
      {isFilterModalOpen && (
        <FilterModal
          onClose={handleFilterToggle}
        />
      )}
      {isAddServiceModalOpen && (
        <AddServiceModal
          onClose={handleCloseAddServiceModal}
          onSave={handleAddService}
        />
      )}
      {isAddProductModalOpen && (
        <AddProductModal
          onClose={handleCloseAddProductModal}
          onSave={handleAddProduct}
        />
      )}
    </div>
  );
};

export default Services;




