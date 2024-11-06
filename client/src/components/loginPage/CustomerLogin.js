import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './css/CustomerLogin.css'

function CustomerLogin() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    

    if (email === "linjun0206@gmail.com" && password === "password") {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userType', 'business');  
      navigate('/home');  
    } else {
      setError(true);  
    }
  };


  return (
    <div className="business-container">
      <h1 className="title">Petbiz</h1>
      <div className="line-container">
        <span className="line"></span>
        <h2 className="subtitle">CUSTOMER LOGIN/SIGN UP</h2>
        <span className="line"></span>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="label">Email Address</label>
        <input type="email" id="email" name="email" className="input" required />

        <label htmlFor="password" className="label">Password</label>
        <input type="password" id="password" name="password" className="input" required />

        <div className="remember-container">
          <div className="checkbox-container">
            <input type="checkbox" id="rememberMe" name="rememberMe" className="checkbox" />
            <label htmlFor="rememberMe" className="remember-label">Remember me</label>
          </div>
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </div>

        {error && <div className="error-message">The account or password is incorrect!</div>}

        <button type="submit" className="sign-in-button">Sign in</button>

        <div className="sign-up-container">
          <span className='account'>Didn't have an account?</span>
          <Link to="/customer-signup" className="sign-up">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}


export default CustomerLogin;
