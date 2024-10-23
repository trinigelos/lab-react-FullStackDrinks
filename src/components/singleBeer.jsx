import { useLocation } from 'react-router-dom';

const SingleBeer = () => {
  const location = useLocation();
  const beer = location.state?.beer || {}; // Safe destructuring in case location.state is null
 
  if (!beer) {
    return <div>No beer data found!</div>; // Fallback in case there's no beer data
  } 

  

  
 

  return (
    <div className="single-beer">
      <img src={beer.image_url} alt={beer.name} />
      <div className="single-beer-text">

      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Contributed By:</strong> {beer.contributed_by}</p>
      </div>
   
    </div>
  );
};

export default SingleBeer;
