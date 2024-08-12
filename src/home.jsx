import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // For custom styles

function Home({ cardData }) {
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

      <div className="container my-4">
        <div className="row">
          {cardData.map((data, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <Card index={index} title={data.title} price={data.price} imageSrc={data.imageSrc} />
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
    <NavLink to={`/buy/${index}`} className="card-link">
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
