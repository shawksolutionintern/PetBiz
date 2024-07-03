import React from 'react';
import { Modal, Button } from 'antd';
import './FilterModal.css';

const FilterModal = ({ visible, filters, selectedFilters, onClose, onFilterChange }) => {
  if (!filters) return null;

  return (
    <Modal
      title="Filter Options"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="filter-modal"
    >
      {filters.map((filterGroup, index) => (
        <div key={index} className="filter-group">
          <h3>{filterGroup.title}</h3>
          <div className="filter-buttons">
            {filterGroup.options.map((option) => (
              <Button
                key={option}
                type={selectedFilters[filterGroup.title]?.includes(option) ? 'primary' : 'default'}
                onClick={() => onFilterChange(filterGroup.title, option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </Modal>
  );
};

export default FilterModal;

