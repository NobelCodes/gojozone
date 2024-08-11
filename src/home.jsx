import React from 'react';
import p1 from './assets/MYPIC.jpg'
import './home.css';
import { useNavigate, NavLink } from 'react-router-dom';
function Home() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">GojoZone</a>
        <div className="ml-auto">
          <form className="form-inline">
            <a href="https://www.google.com" className="search-link">
              <input 
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span className="search-icon">&#128269;</span>
            </a> 
          </form>
        </div>
      </nav>

      <div className="container mt-4">
        
        <div className="row">

        <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          <Poster
            imageUrl={p1}
            title="Sample Title That Exceeds 28 Characters"
            price="ETB 200,000"
            id="postingBox"
          />
          
   
          
          

          {/* Add more <Poster /> components as needed */}
        </div>
      </div>
    </div>
  );
}

function Poster({ imageUrl, title, price }) {
  // Function to truncate title if it exceeds 28 characters
  const truncateTitle = (str) => {
    return str.length > 28 ? str.substring(0, 28) + "..." : str;
  };

  return (
    <NavLink to="/buy" style={{textDecoration: 'none'}}>
    <div className="col-md-4 mb-4">
      <div className="poster">
        <img src={imageUrl} alt="Poster" className="poster-img" />
        <div className="poster-content">
          <h5 className="poster-title">{truncateTitle(title)}</h5>
          <p className="poster-price">{price}</p>
        </div>
      </div>
    </div>
    </NavLink>
  );
}

export default Home;
