import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa"; 
import { CiCircleCheck } from "react-icons/ci"; 
import './css/ResetPassword.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpperAndLowerCase = /(?=.*[a-z])(?=.*[A-Z])/.test(password);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Password reset successfully:', password);
  };

  return (
    <div className="reset-password-page">
      <FaArrowLeft className="arrow-left" onClick={() => window.history.back()} />
      <h1 className="title">Reset Password</h1>
      <p className="instruction">Enter your new password to reset your password</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password" className="label">Password</label>
          <div className="password-input-container">
            <input 
              type={showPassword ? "text" : "password"}
              id="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {showPassword ? (
              <FaRegEye 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaRegEyeSlash 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="label">Confirm Password</label>
          <div className="password-input-container">
            <input 
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {showConfirmPassword ? (
              <FaRegEye 
                className="toggle-password" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <FaRegEyeSlash 
                className="toggle-password" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>
        </div>
        <div className="password-criteria">
          <div className={`criteria ${isMinLength ? 'met' : ''}`}>
            <CiCircleCheck /> At least 8 characters
          </div>
          <div className={`criteria ${hasNumber ? 'met' : ''}`}>
            <CiCircleCheck /> At least 1 number
          </div>
          <div className={`criteria ${hasUpperAndLowerCase ? 'met' : ''}`}>
            <CiCircleCheck /> Both upper and lower case letters
          </div>
        </div>
        <button type="submit" className="reset-button">Reset</button>
      </form>
    </div>
  );
};

export default ResetPassword;

