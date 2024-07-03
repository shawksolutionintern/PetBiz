import React, { useState } from "react";
import "./Services.css";
import ServiceDetailModal from "./ServiceDetailModal";
import ProductDetailModal from "./ProductDetailModal";
import AddProductModal from "./AddProductModal";
import AddServiceModal from "./AddServiceModal";
import FilterModal from "./FilterModal";
import PackageDetailModal from "./PackageDetailModal";
import AddPackageModal from "./AddPackageModal";

const Services = () => {
  const [selectedTab, setSelectedTab] = useState("Services");
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isAddPackageModalOpen, setIsAddPackageModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedPackage, setSelectedPackage] = useState(null);
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
  const [packages, setPackages] = useState([
    { id: 1, name: "Package Name", category: "Package Category", price: "$60", items: [{ name: "Haircut", qty: 1 }, { name: "Cat snacks", qty: 1 }], tags: ["Dog", "Long Hair"], noLongerOffered: false },
    { id: 2, name: "Package Name", category: "Package Category", price: "$70", items: [{ name: "Grooming", qty: 1 }, { name: "Dog snacks", qty: 1 }], tags: ["Cat", "Short Hair"], noLongerOffered: false },
    { id: 3, name: "Package Name", category: "Package Category", price: "$80", items: [{ name: "Training", qty: 1 }, { name: "Cat food", qty: 1 }], tags: ["Cat", "Long Hair"], noLongerOffered: false },
    { id: 4, name: "Package Name", category: "Package Category", price: "$100", items: [{ name: "Training", qty: 1 }, { name: "Dog food", qty: 1 }],tags: ["Dog", "Long Hair"], noLongerOffered: false },
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

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  const handleCloseServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleClosePackageModal = () => {
    setIsPackageModalOpen(false);
    setSelectedPackage(null);
  };

  const handleSaveService = (updatedService) => {
    setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
  };

  const handleSaveProduct = (updatedProduct) => {
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
  };

  const handleSavePackage = (updatedPackage) => {
    setPackages(packages.map(pkg => pkg.id === updatedPackage.id ? updatedPackage : pkg));
  };

  const handleDeleteService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
    handleCloseServiceModal();
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    handleCloseProductModal();
  };

  const handleDeletePackage = (packageId) => {
    setPackages(packages.filter(pkg => pkg.id !== packageId));
    handleClosePackageModal();
  };

  const handleFilterToggle = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleFilterChange = (category, option) => {
    setSelectedFilters((prevFilters) => {
      const currentCategoryFilters = prevFilters[category] || [];
      if (currentCategoryFilters.includes(option)) {
        return {
          ...prevFilters,
          [category]: currentCategoryFilters.filter((item) => item !== option),
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...currentCategoryFilters, option],
        };
      }
    });
  };

  const handleAddButtonClick = () => {
    if (selectedTab === "Services") {
      setIsAddServiceModalOpen(true);
    } else if (selectedTab === "Products") {
      setIsAddProductModalOpen(true);
    } else if (selectedTab === "Packages") {
      setIsAddPackageModalOpen(true);
    }
  };

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleAddPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  const handleCloseAddServiceModal = () => {
    setIsAddServiceModalOpen(false);
  };

  const handleCloseAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  const handleCloseAddPackageModal = () => {
    setIsAddPackageModalOpen(false);
  };

  const applyFilters = (data) => {
    let filteredData = [...data];

    if (selectedFilters.Price) {
      filteredData.sort((a, b) =>
        selectedFilters.Price.includes("Low to high")
          ? a.price - b.price
          : b.price - a.price
      );
    }

    Object.keys(selectedFilters).forEach((category) => {
      if (category !== "Price") {
        const options = selectedFilters[category];
        if (options.length > 0) {
          filteredData = filteredData.filter((item) => {
            if (category === "Service Type" || category === "Product Type" || category === "Package Category") {
              return options.includes(item.type || item.category);
            } else if (category === "Pet Type") {
              return item.tags.some(tag => options.includes(tag));
            } else if (category === "Other") {
              if (options.includes("Active")) return !item.noLongerOffered;
              if (options.includes("Inactive")) return item.noLongerOffered;
            }
            return true;
          });
        }
      }
    });

    return filteredData;
  };

  const getFilteredData = () => {
    if (selectedTab === "Services") {
      return applyFilters(services);
    } else if (selectedTab === "Products") {
      return applyFilters(products);
    } else if (selectedTab === "Packages") {
      return applyFilters(packages);
    }
  };

  const filters = {
    Services: [
      { title: "Price", options: ["Low to high", "High to low"] },
      { title: "Service Type", options: ["Grooming", "Training", "Boarding"] },
      { title: "Pet Type", options: ["Dog", "Cat", "Long Hair", "Short Hair"] },
      { title: "Other", options: ["Active", "Inactive"] },
    ],
    Products: [
      { title: "Price", options: ["Low to high", "High to low"] },
      { title: "Product Type", options: ["Food", "Snacks", "Clothes", "Medicine", "Toys"] },
      { title: "Pet Type", options: ["Dog", "Cat", "> 8 years old", "< 1 year old"] },
      { title: "Other", options: ["Active", "Inactive"] },
    ],
    Packages: [
      { title: "Price", options: ["Low to high", "High to low"] },
      { title: "Package Category", options: ["Food", "Sale", "Beauty"] },
      { title: "Pet Type", options: ["Dog", "Cat", "< 1 year old", "> 8 years old"] },
      { title: "Other", options: ["Active", "Inactive"] },
    ],
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
        {selectedTab === "Packages" && packages.map((pkg) => (
          <div
            key={pkg.id}
            className="service-item"
            onClick={() => handlePackageClick(pkg)}
          >
            <div className="service-info">
              <div className="service-name">{pkg.name}</div>
              <div className="service-type">{pkg.category}</div>
            </div>
            <div className="service-details">
              <div className="service-price">{pkg.price}</div>
              <div className="service-duration">{pkg.items.length} items</div>
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
      {isPackageModalOpen && selectedPackage && (
        <PackageDetailModal
          pkg={selectedPackage}
          onClose={handleClosePackageModal}
          onSave={handleSavePackage}
          onDelete={handleDeletePackage}
        />
      )}
      {isFilterModalOpen && (
        <FilterModal
          visible={isFilterModalOpen}
          filters={filters[selectedTab]}
          selectedFilters={selectedFilters}
          onClose={handleFilterToggle}
          onFilterChange={handleFilterChange}
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
      {isAddPackageModalOpen && (
        <AddPackageModal
          visible={isAddPackageModalOpen}
          onClose={handleCloseAddPackageModal}
          onSave={handleAddPackage}
        />
      )}
    </div>
  );
};

export default Services;




