import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6"; 
import { useNavigate } from 'react-router-dom';
import './css/ForgotPassword.css';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email submitted for password reset:', email);
    };
  
    const handleVerification = () => {
      navigate('/verification-page');
    };
  
    return (
      <div className="forgot-password-container">
        <FaArrowLeft className="arrow-left" onClick={() => navigate(-1)} />
        <h1 className="titleForgot">Forgot Password?</h1>
        <p className="instructions">Enter your Email address to reset your password</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label">Email Address</label>
            <input
              type="email"
              id="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="verification-button" onClick={handleVerification}>
            Get Verification Code
          </button>
        </form>
      </div>
    );
  };
  
  export default ForgotPassword;
