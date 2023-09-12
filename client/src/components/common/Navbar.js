import React from 'react';
import { FaCalendarAlt, FaPaw, FaUserFriends, FaChartBar, FaCog, FaRegEnvelope, FaRegUserCircle } from 'react-icons/fa';

function NavBar () {
    return (
      <div className="navbar">
        <div className="logo">Petbiz</div>
        <div className="nav-item">
          <FaCalendarAlt size={28}/>
          <span>Book</span>
        </div>
        <div className="nav-item">
          <FaPaw size={28}/>
          <span>Service</span>
        </div>
        <div className="nav-item">
          <FaUserFriends size={28}/>
          <span>Clients</span>
        </div>
        <div className="nav-item">
          <FaChartBar size={28}/>
          <span>Report</span>
        </div>
        <div className="nav-item">
          <FaRegUserCircle size={28}/>
          <span>Profile</span>
        </div>
        <div className="nav-item">
          <FaRegEnvelope size={28}/>
          <span>Message</span>
        </div>
        <div className="nav-item nav-item-bottom">
          <FaCog size={28}/>
          <span>Setting</span>
        </div>
      </div>
    );
  };
 
  export default NavBar;
