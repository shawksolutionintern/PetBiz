
import React from 'react';
import './App.css';
import Calender from './components/homePage/Calender';
import NavBar from './components/common/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './components/bookPage/Book';
import Service from './components/servicePage/Service';
import Clients from './components/clientPage/Clients';
import Report from './components/reportPage/Report';
import Profile from './components/profilePage/Profile';
import Message from './components/messagePage/Message';
import Setting from './components/settingPage/Setting';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar"> <NavBar /> </div>
        <div className="main-content">
          <Routes>
            <Route path="/book" element={<Book />} />
            <Route path="/service" element={<Service />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/report" element={<Report />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/message" element={<Message />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      <Calender/>
      </div>
    </Router>
  );
}

export default App;