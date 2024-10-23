// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      <h1>WELCOME TO OUR BEERS CATALOG</h1>
      <div className="links">
      <div className="links-link">
        <Link to="/beers">All Beers</Link>
      </div><div className="links-link">
        <Link to="/random-beer">Random Beer</Link>
        </div><div className="links-link">
        <Link to="/new-beer">New Beer</Link>
         </div>
      </div>
    </div>
  );
};

export default HomePage;
