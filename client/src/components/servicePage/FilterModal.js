import React from "react";
import "./FilterModal.css";

const FilterModal = ({ visible, filters, selectedFilters, onFilterChange }) => {
  if (!filters) return null;

  return (
    <div className={`filter-panel ${visible ? "visible" : "hidden"}`}>
      {filters.map((filterGroup, index) => (
        <div key={index} className="filter-group">
          <h3 className="filter-title">{filterGroup.title}</h3>
          <div className="filter-buttons">
            {filterGroup.options.map((option) => (
              <button
                key={option}
                className={`filter-button ${
                  selectedFilters[filterGroup.title]?.includes(option)
                    ? "active"
                    : ""
                }`}
                onClick={() => onFilterChange(filterGroup.title, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterModal;


