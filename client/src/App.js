
import React from 'react';
import './App.css';
import Calender from './components/homepage/Calender.js';
import NavBar from './components/common/Navbar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Calender />
    </div>
  );
}

export default App;
