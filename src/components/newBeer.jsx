
// src/components/AddBeer.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewBeer = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [brewersTips, setBrewersTips] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      attenuation_level: attenuationLevel,
      brewers_tips: brewersTips,
      image_url: imageUrl,
    };

    try {
   // Post the new beer
   const postResponse = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
   console.log(postResponse.data.message); // Logs success message
   
   // Now fetch the newly created beer by ID
   const getResponse = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
   const addedBeer = getResponse.data.reverse().find((beer) => beer.name === newBeer.name);  // Find the newly added beer

   // Redirect to the new beer's details page
   navigate(`/beer/${addedBeer._id}`, { state: { beer: addedBeer } });

    } catch (error) {
      console.error('Error adding new beer:', error);
    }
  };

  return (
    <div>
      <h1 className='new-beer-h1'>Add New Beer</h1>
      <form id='new-beer-form' onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Tagline:</label>
        <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>First Brewed:</label>
        <input type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} required />

        <label>Attenuation Level:</label>
        <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} required />

        <label>Brewer's Tips:</label>
        <input type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} required />

        <label>Image URL:</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
