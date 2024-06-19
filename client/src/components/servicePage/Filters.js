import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ onFilterChange, onClose }) => {
  const [filters, setFilters] = useState({
    price: "",
    type: ""
  });

  const handleFilterChange = (name, value) => {
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filters-overlay">
      <div className="filters-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h3>Filters</h3>
        <div className="filter-group">
          <label>Price</label>
          <button onClick={() => handleFilterChange("price", "$30")}>$30</button>
          <button onClick={() => handleFilterChange("price", "$10")}>$10</button>
        </div>
        <div className="filter-group">
          <label>Service Type</label>
          <button onClick={() => handleFilterChange("type", "Grooming")}>Grooming</button>
          <button onClick={() => handleFilterChange("type", "Training")}>Training</button>
          <button onClick={() => handleFilterChange("type", "Boarding")}>Boarding</button>
        </div>
        <div className="filter-group">
          <label>Pet Type</label>
          <button onClick={() => handleFilterChange("type", "Dog")}>Dog</button>
          <button onClick={() => handleFilterChange("type", "Cat")}>Cat</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
