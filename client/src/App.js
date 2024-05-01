
import React from 'react';
import './App.css';
import Home from './components/homePage/Home';
import NavBar from './components/common/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
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

// 保护组件，用于确保用户登录后才能访问某些路由
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // 检查本地存储以确认是否已登录
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* 根据登录状态显示NavBar */}
        {localStorage.getItem('isLoggedIn') && <NavBar />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/business-login" element={<BusinessLogin />} />
            <Route path="/customer-login" element={<CustomerLogin />} />
            <Route path="/business-signup" element={<BusinessSignup />} /> 
            <Route path="/next-page" element={<NextStep/>}/> 
            <Route path="/forgot-password" element={<ForgotPassword/>}/> 
            <Route path="/verification-page" element={<VerificationPage/>}/> 
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/book" element={<ProtectedRoute><Book /></ProtectedRoute>} />
            <Route path="/service" element={<ProtectedRoute><Service /></ProtectedRoute>} />
            <Route path="/clients" element={<ProtectedRoute><Clients /></ProtectedRoute>} />
            <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
            <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
