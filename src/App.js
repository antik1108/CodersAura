import React from 'react';
import './App.css';
import Contact from './components/Contact.js';
import HomePage from './components/HomePage.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
