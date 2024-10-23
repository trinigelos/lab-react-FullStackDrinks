// src/components/RandomBeer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setBeer(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='single-beer'>
      <img className='random-beer-img' src={beer.image_url} alt={beer.name}  />
      <div className="single-beer-text">
      <h1>{beer.name}</h1>
      <p><strong>Tagline:</strong> {beer.tagline}</p>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed By:</strong> {beer.contributed_by}</p>
      </div>
      </div>
  );
};

export default RandomBeer;
