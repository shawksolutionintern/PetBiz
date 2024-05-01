
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleNextStep = () => {
    navigate('/next-page');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted:', {
      fullName,
      businessName,
      businessEmail,
      serviceType,
    });
  };

  return (
    <div className="signup-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessName">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessEmail">Business Email</label>
          <input
            type="email"
            id="businessEmail"
            name="businessEmail"
            value={businessEmail}
            onChange={(event) => setBusinessEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="serviceType">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            value={serviceType}
            onChange={(event) => setServiceType(event.target.value)}
            required
          >
            <option value="">Select Service Type</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleNextStep}>Next Step</button>
      </form>
    </div>
  );
}

export default SignUp;