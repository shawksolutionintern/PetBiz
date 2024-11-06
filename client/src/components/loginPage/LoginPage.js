import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleBusinessLogin = () => {
    navigate('/business-login');
  };

  const handleCustomerLogin = () => {
    navigate('/customer-login');
  };

  return (
    <div className="login-container">
      <h1 className="titlelogin">Petbiz</h1>
      <button className="business" onClick={handleBusinessLogin}>Business Account</button>
      <button className="customer" onClick={handleCustomerLogin}>Customer Account</button>
    </div>
  );
}

export default LoginPage;