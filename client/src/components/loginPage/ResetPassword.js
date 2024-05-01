import React, { useState } from 'react';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('New Password Set:', newPassword);
    // Add further processing here for password reset logic
  };

  return (
    <div className="reset-password-container">
      <h1>Reset Password</h1>
      <p>Enter your new password to reset your password</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="newPassword">Enter Your New Password</label>
          <input 
            type="password" 
            id="newPassword" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Your New Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="password-criteria">
          <p>Password must contain:</p>
          <ul>
            <li>At least 8 characters</li>
            <li>At least 1 number</li>
            <li>Both upper and lower case letters</li>
          </ul>
        </div>
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default ResetPassword;
