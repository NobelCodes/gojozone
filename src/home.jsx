import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // For custom styles
import Button from 'react-bootstrap/Button';
function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://192.168.1.103:8070/properties');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (properties.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          background: 'linear-gradient(to right, silver, lightgray)', 
          WebkitBackgroundClip: 'text', 
          color: 'transparent' 
        }}>
          Nothing to display
        </h1>
        <NavLink to='/upload' style={{ textDecoration: 'none', color: 'black' }}>
  <Button variant="primary" style={{ margin: 0, fontSize: '1rem', color: 'black' }}>
    Be the first one to upload
  </Button >
</NavLink>

      </div>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary" id="navbar">
        <a className="navbar-brand" href="#">GojoZone</a>
        <div className="ml-auto">
          <form className="form-inline">
           <NavLink
    to="/"
    style={{ textDecoration: 'none', color: 'black' }}
  >
<button type="button" className="btn btn-primary" id="post-btn">Post Ad</button>
  </NavLink>
              
           
          </form>
        </div>
      </nav>

      <div className="container my-4">
        <div className="row">
          {properties.map((data, index) => (
            <div className="col-md-3 mb-4" key={data.id}>
              <Card
                index={data.id}
                title={data.title}
                price={data.price}
                imageSrc={data.imgsrc1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ index, title, price, imageSrc }) {
  // Truncate title if it's longer than 26 characters
  const truncatedTitle = title.length > 26 ? title.substring(0, 26) + '...' : title;

  return (
    <NavLink to={`/buy/${index-1}`} className="card-link">
      <div className="card">
        <img
          src={imageSrc}
          className="card-img-top"
          alt="Card Image"
        />
        <div className="card-body">
          <h5 className="card-title">{truncatedTitle}</h5>
          <p className="card-text price">{price}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default Home;
