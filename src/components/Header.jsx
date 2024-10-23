// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Don't show the header on the Home page
  if (location.pathname === '/') return null;

  return (
    <header className='App-header'>

      <div className="div-app-header">
      <Link to="/">Home</Link>

      </div>
      <div className="div-app-header">
      <Link to="/beers">    ALL BEERS</Link>

      </div>
      <div className="div-app-header">
      <Link to="/new-beer">    NEW BEER</Link>

      </div>
      <div className="div-app-header">
      <Link to="/random-beer">    RANDOM BEER</Link>

      </div>
     
      
    </header>
  );
};

export default Header;
