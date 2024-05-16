import React, { useState } from 'react';

const CustomerSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToPrivacy) {
      alert('You must agree to the Privacy Policy.');
      return;
    }
    console.log('Account Data:', { email, password, confirmPassword });
    // Further processing here
  };

  return (
    <div className="customer-signup">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}> 
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="password-criteria">
          <label>Password must contain:</label>
          <ul>
            <li>At least 8 characters</li>
            <li>At least 1 number</li>
            <li>Both upper and lower case letters</li>
          </ul>
        </div>
        <div className="policy">
          <input type="checkbox" id="privacyPolicy" 
            checked={agreedToPrivacy} 
            onChange={() => setAgreedToPrivacy(!agreedToPrivacy)}
          />
          <label htmlFor="privacyPolicy">I have read and agree to the <span className="underline">Privacy Policy</span>.</label>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CustomerSignup;
