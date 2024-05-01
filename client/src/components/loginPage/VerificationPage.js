import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationPage = () => {
  const navigate = useNavigate();
  const handleRestPassword = () => {
    navigate('/reset-password');
  }
  const [code, setCode] = useState(Array(6).fill('')); 

  const handleChange = (index, event) => {
    const newCode = [...code];
    newCode[index] = event.target.value.slice(0, 1); 
    setCode(newCode);

    if (event.target.nextSibling && event.target.value) {
      event.target.nextSibling.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Verification Code Entered:', code.join(''));
    // Add further processing here
  };

  return (
    <div className="verification-container">
      <h1>Forgot Password?</h1>
      <p id='line1'>Enter your verification code to reset your password</p>
      <p id='line2'>Enter Your Verification Code</p>
      <form onSubmit={handleSubmit}>
        <div className="code-input-container">
          {code.map((digit, index) => (
            <input 
              key={index}
              type="text" 
              value={digit}
              onChange={(e) => handleChange(index, e)}
              maxLength="1"
              className="code-input"
              autoComplete="off"
            />
          ))}
        </div>
        <button type="submit" className="reset-password" onClick={handleRestPassword}>Verify</button>
      </form>
    </div>
  );
};

export default VerificationPage;