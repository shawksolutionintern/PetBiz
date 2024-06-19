import React, { useState } from "react";
import "./EmployeeExceptionModal.css";

const EmployeeExceptionModal = ({ onClose }) => {
  // Mock employee information
  const employees = [
    { name: 'Becky', price: 30, duration: 30 },
    { name: 'Miranda', price: 35, duration: 45 },
    { name: 'Mike', price: 40, duration: 60 },
    { name: 'Matt', price: 25, duration: 30 }
  ];

  const [employeeStatuses, setEmployeeStatuses] = useState(
    employees.reduce((acc, employee) => {
      acc[employee.name] = "On";
      return acc;
    }, {})
  );

  const [expandedEmployee, setExpandedEmployee] = useState(null);

  const handleStatusChange = (employeeName, status) => {
    setEmployeeStatuses({
      ...employeeStatuses,
      [employeeName]: status,
    });
  };

  const toggleEmployeeDetails = (employeeName) => {
    setExpandedEmployee(expandedEmployee === employeeName ? null : employeeName);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Employee Exceptions</h2>
        <div className="employee-list">
          {employees.map((employee) => (
            <div key={employee.name} className="employee-item">
              <div className="employee-header" onClick={() => toggleEmployeeDetails(employee.name)}>
                <span>{employee.name}</span>
                <select
                  value={employeeStatuses[employee.name]}
                  onChange={(e) => handleStatusChange(employee.name, e.target.value)}
                >
                  <option value="On">On</option>
                  <option value="Off">Off</option>
                </select>
                <button className="toggle-button">
                  {expandedEmployee === employee.name ? '▲' : '▼'}
                </button>
              </div>
              {expandedEmployee === employee.name && (
                <div className="employee-details">
                  <p>Price: ${employee.price}</p>
                  <p>Duration: {employee.duration} Minutes</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="form-actions">
          <button type="button" className="save-buttonee" onClick={onClose}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeExceptionModal;



