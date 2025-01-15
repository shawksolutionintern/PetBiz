import React, { useState } from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import "./EmployeeExceptionModal.css";

const EmployeeExceptionModal = ({ onClose }) => {
  const employees = [
    { name: "Becky", price: 30, duration: 30 },
    { name: "Miranda", price: 35, duration: 45 },
    { name: "Mike", price: 40, duration: 60 },
    { name: "Matt", price: 25, duration: 30 },
  ];

  const [expandedEmployee, setExpandedEmployee] = useState(null);

  const toggleEmployeeDetails = (employeeName) => {
    setExpandedEmployee(expandedEmployee === employeeName ? null : employeeName);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content-ee">
        <div className="modal-header-ee">
          <CiSquareChevLeft className="back-icon" onClick={onClose} />
          <h2 className="modal-title-ee">Service Detail</h2>
        </div>
        <div className="form-group-ee">
          <label>Employee Exceptions</label>
          <label className="switch-ee">
            <input type="checkbox" />
            <span className="slider-round"></span>
          </label>
        </div>
        <h2 className="elist-name">Employee List</h2>
        {/* 员工列表 */}
        <div className="employee-list">
          {employees.map((employee) => (
            <div
              key={employee.name}
              className={`employee-box ${expandedEmployee === employee.name ? "expanded" : "collapsed"
                }`}
            >
              <div className="employee-header" onClick={() => toggleEmployeeDetails(employee.name)}>
                <span
                  className={`employee-name ${expandedEmployee === employee.name ? "active" : ""
                    }`}
                >
                  {employee.name}
                </span>
                <div className="employee-status">
                  <span>On</span>
                  <FaChevronDown className="chevron-icon" />
                </div>
              </div>

              {/* 分割线 */}
              {expandedEmployee === employee.name && <div className="divider"></div>}

              {/* 展开内容 */}
              {expandedEmployee === employee.name && (
                <div className="dropdown-menu">
                  <p className="dropdown-item">
                    <span>Price</span>
                    <span className="price">${employee.price}</span>
                  </p>
                  <p className="dropdown-item">
                    <span>Duration</span>
                    <span className="price">{employee.duration} Minutes</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default EmployeeExceptionModal;
