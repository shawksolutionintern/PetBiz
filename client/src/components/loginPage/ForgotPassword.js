import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement the logic to handle the email submission here
        console.log('Email submitted for password reset:', email);
    };

    const handleVerification = () =>{
        navigate('/verification-page');
    };

    return (
        <div className="forgot-password-container">
            <h1>Forgot Password?</h1>
            <p>Enter your Email address to reset your password</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="verification-page" onClick={handleVerification}>Get Verification Code</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
