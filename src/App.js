import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'; // Import the navbar component
import HomePage from './components/HomePage.js'; // Import the HomePage component

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <HomePage /> 
    </div>
  );
}

export default App;
