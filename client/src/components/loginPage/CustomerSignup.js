import React, { useState } from 'react';
import { FaArrowLeft, FaRegEyeSlash, FaRegEye } from "react-icons/fa"; 
import { CiCircleCheck } from "react-icons/ci"; 
import './css/CustomerSignup.css';

const CustomerSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToPrivacy) {
      alert('You must agree to the Privacy Policy.');
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Account Data:', { username, email, password });
  };

  return (
    <div className="customer-signup">
      <FaArrowLeft className="arrow-left" onClick={() => window.history.back()} />
      <h1 className="title">Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="label">Username</label>
          <input
            type="text"
            id="username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
          <div><CiCircleCheck /> At least 8 characters</div>
          <div><CiCircleCheck /> At least 1 number</div>
          <div><CiCircleCheck /> Both upper and lower case letters</div>
        </div>
        <div className="policy">
          <input
            type="checkbox"
            id="privacyPolicy"
            checked={agreedToPrivacy}
            onChange={() => setAgreedToPrivacy(!agreedToPrivacy)}
            className="checkbox"
          />
          <label htmlFor="privacyPolicy">I have read and agree to the <span className="underline">Privacy Policy</span>.</label>
        </div>
        <button type="submit" className="sign-in-button">Create Account</button>
      </form>
    </div>
  );
};

export default CustomerSignup;

