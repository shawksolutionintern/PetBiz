import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

function BusinessLogin() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setError(true); 

    if (email === "linjun0206@gmail.com" && password === "password") {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userType', 'business');  // 设置登录状态
      navigate('/home');  
    } else {
      setError(true);  
    }
  };


  return (
    <div className="business-container">
      <h1>Petbiz</h1>
      <h2>BUSINESS LOGIN/SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <div>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        {error && <div className="error-message">The account or password is incorrect!</div>}
        <button type="submit">Sign in</button>
        <a href="#" style={{display: 'block', marginTop: '10px'}}>
          <Link to="/forgot-password"> Forgot Password?</Link>
        </a>
      </form>
      <div style={{marginTop: '10px'}}>
        <span>Didn't have an account? </span>
        <Link to="/business-signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default BusinessLogin;
