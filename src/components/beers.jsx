// src/components/BeerList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const beersPerPage = 12;

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);  // Reset to first page on new search
  };

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentBeers = filteredBeers.slice(indexOfFirstBeer, indexOfLastBeer);
  const totalPages = Math.ceil(filteredBeers.length / beersPerPage);

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
    
      <input
        className='input-beers-search'
        type="text"
        placeholder="Search beers by name..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '20px' }}
      />
      <div className="beer-list">
      {currentBeers.length > 0 ? (
        currentBeers.map((beer) => (
          <div key={beer._id} className="beer">
            <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
            <p><strong>Contributed By:</strong> {beer.contributed_by}</p>
            <Link to={`/beer/${beer._id}`} state={{ beer }}>
            <button className='btn-details'>More Details</button>
          </Link>
          </div>
        ))
      ) : (
        <p>No beers match your search criteria.</p>
      )}
      
      </div>
      
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Beers;
