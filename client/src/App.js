
import React from 'react';
import './App.css';
import Home from './components/homePage/Home';
import NavBar from './components/common/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Book from './components/bookPage/Book';
import Service from './components/servicePage/Service';
import Clients from './components/clientPage/Clients';
import Report from './components/reportPage/Report';
import Profile from './components/profilePage/Profile';
import Message from './components/messagePage/Message';
import Setting from './components/settingPage/Setting';
import LoginPage from './components/loginPage/LoginPage';  
import BusinessLogin from './components/loginPage/BusinessLogin'; 
import CustomerLogin from './components/loginPage/CustomerLogin';  
import BusinessSignup from './components/loginPage/BusinessSignup';
import NextStep from './components/loginPage/NextStep';
import ForgotPassword from './components/loginPage/ForgotPassword';
import VerificationPage from './components/loginPage/VerificationPage';
import ResetPassword from './components/loginPage/ResetPassword';
import CustomerSignup from './components/loginPage/CustomerSignup';
import Purchase from './components/PurchasePage/Purchase';
import AppointmentForm from './components/homePage/AppointmentForm';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); 
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const AppContent = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const isLoginPage = location.pathname === '/login' || 
                      location.pathname === '/business-login' || 
                      location.pathname === '/customer-login' || 
                      location.pathname === '/business-signup' ||
                      location.pathname === '/next-page' || 
                      location.pathname === '/forgot-password' || 
                      location.pathname === '/verification-page' || 
                      location.pathname === '/reset-password' || 
                      location.pathname === '/customer-signup';

  return (
    <div className="App">
      {/* 根据登录状态和当前路径显示NavBar */}
      {isLoggedIn && !isLoginPage && <NavBar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/business-login" element={<BusinessLogin />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/business-signup" element={<BusinessSignup />} /> 
          <Route path="/next-page" element={<NextStep />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/verification-page" element={<VerificationPage />} /> 
          <Route path="/AppointmentForm" element={<AppointmentForm />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/customer-signup" element={<CustomerSignup />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/book" element={<ProtectedRoute><Book /></ProtectedRoute>} />
          <Route path="/service" element={<ProtectedRoute><Service /></ProtectedRoute>} />
          <Route path="/clients" element={<ProtectedRoute><Clients /></ProtectedRoute>} />
          <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
          <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
          <Route path="/purchase" element={<ProtectedRoute><Purchase /></ProtectedRoute>} />
          
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
