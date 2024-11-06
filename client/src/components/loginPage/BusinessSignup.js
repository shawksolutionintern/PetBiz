
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import './css/BusinessSignup.css'

function SignUp() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessSize, setBusinessSize] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleBack = () => {
    navigate(-1); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      fullName,
      businessName,
      businessEmail,
      businessSize,
      serviceType,
    });
    navigate('/next-page'); 
  };

  return (
    <div className="signup-container">
      <FaArrowLeft className="arrow-left" onClick={handleBack} />
      <h1 className="title">Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName" className="label">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="input"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessName" className="label">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            className="input"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessSize" className="label">Business Size</label>
          <select
            id="businessSize"
            name="businessSize"
            className="input dropdown"
            value={businessSize}
            onChange={(event) => setBusinessSize(event.target.value)}
            required
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="serviceType" className="label">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            className="input dropdown"
            value={serviceType}
            onChange={(event) => setServiceType(event.target.value)}
            required
          >
            <option value="">Select Type</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button type="submit" className="sign-in-button">Next Step</button>
      </form>
    </div>
  );
}

export default SignUp;
