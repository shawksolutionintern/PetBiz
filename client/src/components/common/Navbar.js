import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaPaw, FaUserFriends, FaChartBar, FaRegUserCircle, FaRegEnvelope, FaCog, FaBoxOpen } from 'react-icons/fa';

function NavBar() {
  // 获取用户类型
  const userType = localStorage.getItem('userType');

  return (
    <div className="navbar">
      <div className="logo">Petbiz</div>
      <Link to="/book" className="nav-item nav-link">
        <FaCalendarAlt size={28}/>
        <span>Book</span>
      </Link>
      <Link to="/service" className="nav-item nav-link">
        <FaPaw size={28}/>
        <span>Service</span>
      </Link>
      <Link to="/clients" className="nav-item nav-link">
        <FaUserFriends size={28}/>
        <span>Clients</span>
      </Link>
      <Link to="/report" className="nav-item nav-link">
        <FaChartBar size={28}/>
        <span>Report</span>
      </Link>
      <Link to="/profile" className="nav-item nav-link">
        <FaRegUserCircle size={28}/>
        <span>Profile</span>
      </Link>
      <Link to="/message" className="nav-item nav-link">
        <FaRegEnvelope size={28}/>
        <span>Message</span>
      </Link>
      {userType === 'customer' && (
        <Link to="/purchase" className="nav-item nav-link">
          <FaBoxOpen size={28}/>
          <span>Purchase</span>
        </Link>
      )}
      <Link to="/setting" className="nav-item nav-item-bottom nav-link">
        <FaCog size={28}/>
        <span>Setting</span>
      </Link>
    </div>
  );
}

export default NavBar;

