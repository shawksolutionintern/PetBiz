import React, { useState } from "react";
import "./EmployeeExceptionModal.css";

const EmployeeExceptionModal = ({ employees, onClose }) => {
  const [employeeStatuses, setEmployeeStatuses] = useState(
    employees.reduce((acc, employee) => {
      acc[employee] = "On";
      return acc;
    }, {})
  );

  const handleStatusChange = (employee, status) => {
    setEmployeeStatuses({
      ...employeeStatuses,
      [employee]: status,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Employee Exceptions</h2>
        <div className="employee-list">
          {employees.map((employee) => (
            <div key={employee} className="employee-item">
              <span>{employee}</span>
              <select
                value={employeeStatuses[employee]}
                onChange={(e) => handleStatusChange(employee, e.target.value)}
              >
                <option value="On">On</option>
                <option value="Off">Off</option>
              </select>
            </div>
          ))}
        </div>
        <div className="form-actions">
          <button type="button" className="save-button" onClick={onClose}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeExceptionModal;
