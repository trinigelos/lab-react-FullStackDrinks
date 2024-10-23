// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import Beers from './components/beers'; 
import RandomBeer from './components/randomBeer'; 
import NewBeer from './components/newBeer'; 
import Header from './components/Header'; 
import SingleBeer from './components/singleBeer';
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/beer/:id" element={<SingleBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
